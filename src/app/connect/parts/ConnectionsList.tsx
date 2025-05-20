"use client";

import { FC, useCallback } from "react";
import { ConnectionItemType, FIRST_STEP } from "../constants";
import { ConnectionItem } from "./ConnectionItem";
import { useConnectState } from "../context";

type Props = {
  list: ConnectionItemType[];
};

export const ConnectionsList: FC<Props> = ({ list }) => {
  const { setStep, setActiveId } = useConnectState();

  const handleOpenModal = useCallback(
    (id: string) => {
      setActiveId(id);
      setStep(FIRST_STEP);
    },
    [setActiveId, setStep]
  );

  return (
    <ul className="column gap-3 w-full">
      {list.map((item) => (
        <li key={item.id} className="w-full">
          <ConnectionItem item={item} onClick={handleOpenModal} />
        </li>
      ))}
    </ul>
  );
};
