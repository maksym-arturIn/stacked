import { FC } from "react";
import Image from "next/image";

export const Loader: FC = () => {
  return (
    <div className="spin-reverse">
      <Image
        src={"/icons/spinner.svg"}
        alt={"Spinner"}
        width={12}
        height={12}
      />
    </div>
  );
};
