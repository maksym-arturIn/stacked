"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";
import classNames from "classnames";
import { IconButton } from "./IconButton";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  close: () => void;
} & Required<PropsWithChildren>;

export const Modal: FC<Props> = ({ isOpen, close, children }) => {
  const [show, setShow] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
      setShouldRender(true);
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
      document.body.classList.remove("no-scroll");
      const timeout = setTimeout(() => setShouldRender(false), 200);
      return () => {
        document.body.classList.remove("no-scroll");
        clearTimeout(timeout);
      };
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={classNames(
          "fixed inset-0 bg-gray-500 transition-opacity duration-200",
          show ? "opacity-75" : "opacity-0"
        )}
        aria-hidden="true"
        onClick={close}
      />

      <div
        className={classNames(
          "z-20 relative transform transition-all duration-200 w-[90%] sm:w-full sm:max-w-xl",
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      >
        <IconButton
          onClick={close}
          variant="transparent"
          className="absolute top-1 right-1 sm:top-7 sm:right-7"
        >
          <Image src={"/icons/close.svg"} alt={""} width={16} height={16} />
        </IconButton>
        <div className="overflow-hidden rounded-md bg-main-background text-left shadow-xl">
          <div className="bg-main-background p-4 md:p-8">{children}</div>
        </div>
      </div>
    </div>
  );
};
