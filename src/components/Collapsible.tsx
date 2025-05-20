"use client";

import { useRef, useLayoutEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const Collapsible = ({ isOpen, children }: Props) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (innerRef.current) {
      const contentHeight = innerRef.current.scrollHeight + 20;
      setHeight(isOpen ? contentHeight : 0);
    }
  }, [isOpen, children]);

  return (
    <div
      className="transition-all duration-300 ease-in-out overflow-hidden"
      style={{ maxHeight: `${height}px` }}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  );
};
