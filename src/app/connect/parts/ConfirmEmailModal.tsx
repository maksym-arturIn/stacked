"use client";

import { CodeField, Modal } from "@/components";
import { FC, useEffect, useState } from "react";
import { ConnectionItemType, THIRD_STEP } from "../constants";
import Image from "next/image";
import { useConnectState } from "../context";

type Props = {
  isOpen: boolean;
  close: () => void;
  foundConnection: ConnectionItemType | undefined;
};

export const ConfirmEmailModal: FC<Props> = ({
  isOpen,
  close,
  foundConnection,
}) => {
  const { setStep } = useConnectState();
  const [code, setCode] = useState("");

  useEffect(() => {
    if (code.length === 6) {
      setStep(THIRD_STEP);
    }
  }, [code.length, setStep]);

  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="flex gap-3 items-center mb-8">
        {foundConnection && (
          <Image
            src={foundConnection.icon}
            alt={foundConnection.title}
            width={20}
            height={20}
          />
        )}
        <p className="label-medium">Connecting {foundConnection?.title}</p>
      </div>
      <div className="">
        <p className="body-base text-subdued mb-4">
          Enter a 6-digit code sent to email@address.com
        </p>

        <CodeField
          name={"code"}
          inputMode="numeric"
          type="number"
          onChange={setCode}
        />
      </div>
    </Modal>
  );
};
