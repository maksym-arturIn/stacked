import classNames from "classnames";
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

type Props = Required<PropsWithChildren> &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Container: FC<Props> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={classNames("mx-auto px-0.5 max-w-sm h-full", className)}
      {...props}
    >
      <>{children}</>
    </div>
  );
};
