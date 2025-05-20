import { FC } from "react";
import { ConnectionItemType } from "../constants";
import Image from "next/image";
import { IconButton } from "@/components";

type Props = {
  item: ConnectionItemType;
  onClick: (id: string) => void;
};

export const ConnectionItem: FC<Props> = ({ item, onClick }) => {
  const isConnected = item.isConnected;

  return (
    <div className="p-6 bg-main-foreground w-full rounded-md flex items-center">
      <div className="flex items-center gap-4">
        <Image src={item.icon} alt={item.title} width={32} height={32} />
        <div className="column justify-between">
          <p className="body-base">{item.title}</p>
          {item.subtitle && (
            <p className="body-x-small text-subdued">{item.subtitle}</p>
          )}
        </div>
      </div>
      <div className="ml-auto">
        <IconButton disabled={isConnected} onClick={() => onClick(item.id)}>
          {isConnected ? (
            <Image
              src={"/icons/connections/check.svg"}
              alt={"Check"}
              width={16}
              height={16}
            />
          ) : (
            <Image
              src={"/icons/connections/plus.svg"}
              alt={"Plus"}
              width={16}
              height={16}
            />
          )}
        </IconButton>
      </div>
    </div>
  );
};
