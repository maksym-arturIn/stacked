"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";
import classNames from "classnames";

type Props = {
  isOpen: boolean;
  close: () => void;
} & Required<PropsWithChildren>;

export const Modal: FC<Props> = ({ isOpen, close, children }) => {
  const [show, setShow] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
      const timeout = setTimeout(() => setShouldRender(false), 200);
      return () => clearTimeout(timeout);
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
          "z-20 relative transform transition-all duration-200 sm:w-full sm:max-w-lg",
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      >
        <div className="overflow-hidden rounded-lg bg-white text-left shadow-xl">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
