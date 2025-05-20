import classNames from "classnames";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from "react";

type Props = Required<PropsWithChildren> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const IconButton: FC<Props> = ({
  children,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      className={classNames(
        "bg-white/10 p-2 center rounded-sm active:bg-foreground border-t border-white/10 cursor-pointer",
        className
      )}
      type={type}
      {...props}
    >
      <>{children}</>
    </button>
  );
};
