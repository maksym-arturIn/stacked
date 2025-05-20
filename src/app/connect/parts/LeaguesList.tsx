import { Loader } from "@/components";
import classNames from "classnames";
import Image from "next/image";
import { FC, Fragment } from "react";

type Props = {
  list: (
    | {
        id: string;
        title: string;
        metadata: undefined;
      }
    | {
        id: string;
        title: string;
        metadata: string[];
      }
  )[];
};

export const LeaguesList: FC<Props> = ({ list }) => {
  return (
    <div className="column p-3 gap-3 rounded-sm bg-secondary-background">
      {list.map((item, index) => {
        const isFirst = index === 0;
        const isSecond = index === 1;

        return (
          <div
            key={item.id}
            className={classNames("flex items-start justify-between", {
              "border-t border-strong pt-3": !isFirst,
            })}
          >
            <div className="column">
              <p
                className={classNames("text-muted body-small", {
                  "!text-brand": isFirst,
                  "bg-gradient-to-r from-secondary-text/60 via-secondary-text to-secondary-text/60 inline-block text-transparent bg-clip-text":
                    isSecond,
                })}
              >
                {item.title}
              </p>

              {item.metadata && (
                <div className="flex items-center gap-2">
                  {item.metadata.map((metadata, index) => (
                    <Fragment key={metadata}>
                      {index > 0 && <span className="w-0.5 h-0.5 bg-subdued" />}
                      <p className="text-subdued body-x-small">{metadata}</p>
                    </Fragment>
                  ))}
                </div>
              )}
            </div>

            {isFirst && (
              <Image
                src={"/icons/connections/check.svg"}
                alt={"Check"}
                width={16}
                height={16}
              />
            )}

            {isSecond && <Loader />}
          </div>
        );
      })}
    </div>
  );
};
