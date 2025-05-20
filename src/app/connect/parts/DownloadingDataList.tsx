import { FC } from "react";
import { downloadingDataList } from "../constants";
import { Collapsible, FlickeringGrid } from "@/components";
import classNames from "classnames";
import Image from "next/image";
import { LeaguesList } from "./LeaguesList";

type Props = {
  currentIndex: number;
};

export const DownloadingDataList: FC<Props> = ({ currentIndex }) => {
  return (
    <ul className="column gap-3">
      {downloadingDataList.map((item, index) => {
        const currentEl = currentIndex === index;

        const isConnected = index < currentIndex;

        return (
          <li key={item.id}>
            {currentEl ? (
              <FlickeringGrid className="p-6 min-h-20 column gap-2.5">
                <p className="body-base">{item.title}</p>

                {item.items && (
                  <Collapsible isOpen={currentEl}>
                    <div className="mt-4">
                      <LeaguesList list={item.items} />
                    </div>
                  </Collapsible>
                )}
              </FlickeringGrid>
            ) : (
              <div className="p-6 h-20 bg-main-foreground flex items-center justify-between">
                <div className="column">
                  <p
                    className={classNames("body-base", {
                      "text-brand": isConnected,
                    })}
                  >
                    {item.title}
                  </p>

                  {item?.subtitle && isConnected && (
                    <p className="body-small text-subdued">{item.subtitle}</p>
                  )}
                </div>
                {isConnected && (
                  <div className="h-8 w-8 center rounded-sm bg-white/10">
                    <Image
                      src={"/icons/connections/check.svg"}
                      alt={"Check"}
                      width={16}
                      height={16}
                    />
                  </div>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
