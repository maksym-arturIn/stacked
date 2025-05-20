import { FC } from "react";
import { Button, Title } from "@/components";
import { ConnectionsList } from ".";
import { connectionsList } from "../constants";

export const ConnectPageInner: FC = () => {
  return (
    <div className="center column w-full h-full">
      <div className="column mb-10">
        <Title
          text={"Select platforms to connect to Stacked"}
          className="text-center mb-5"
        />
        <p className="body-base text-center text-subdued">
          Connect tools to manage your Leagues.
        </p>
        <p className="body-base text-center text-subdued">
          Add at least one now, you can always add more later.
        </p>
      </div>

      <div className="mb-10 w-full">
        <ConnectionsList list={connectionsList} />
      </div>

      <Button className="py-3 h-12">
        <span className="label-medium text-background">Continue</span>
      </Button>
    </div>
  );
};
