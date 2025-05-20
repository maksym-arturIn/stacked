"use Client";

import { FC } from "react";
import { ConnectionItemType, downloadingDataList } from "../constants";
import { Modal } from "@/components";
import Image from "next/image";
import { useCyclingIndex } from "@/hooks";
import { DownloadingDataList } from "./DownloadingDataList";

type Props = {
  isOpen: boolean;
  close: () => void;
  foundConnection: ConnectionItemType | undefined;
};

export const DownloadingDataModal: FC<Props> = ({
  isOpen,
  close,
  foundConnection,
}) => {
  const currentIndex = useCyclingIndex({
    start: isOpen,
    length: downloadingDataList.length,
  });

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
        <p className="label-medium">Downloading data</p>
      </div>

      <div className="mb-8">
        <DownloadingDataList currentIndex={currentIndex} />
      </div>

      <p className="body-small text-subdued text-center">
        We’ll redirect you once done.
      </p>
    </Modal>
  );
};
