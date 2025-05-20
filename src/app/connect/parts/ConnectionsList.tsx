"use client";

import { FC, useState } from "react";
import { ConnectionItemType } from "../constants";
import { ConnectionItem } from "./ConnectionItem";
import { Modal } from "@/components";

type Props = {
  list: ConnectionItemType[];
};

export const ConnectionsList: FC<Props> = ({ list }) => {
  const [activeId, setActiveId] = useState<string | null>("sss");

  return (
    <>
      <ul className="column gap-3 w-full">
        {list.map((item) => (
          <li key={item.id} className="w-full">
            <ConnectionItem item={item} onClick={setActiveId} />
          </li>
        ))}
      </ul>

      <Modal isOpen={Boolean(activeId)} close={() => setActiveId(null)}>
        <p>children</p>
      </Modal>
    </>
  );
};
