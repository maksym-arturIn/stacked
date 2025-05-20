import { FC } from "react";
import Image from "next/image";

export const Logo: FC = () => {
  return (
    <Image
      src={"/icons/logo.svg"}
      alt={"Stacked logo"}
      width={120}
      height={15}
    />
  );
};
