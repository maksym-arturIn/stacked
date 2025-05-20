import classNames from "classnames";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from "react";

type Variant = "default" | "transparent";

const styles: Record<Variant, string> = {
  default:
    "bg-white/10 active:bg-white/30 hover:bg-white/20 border-t border-white/10",
  transparent: "bg-transparent hover:bg-white/10 active:bg-white/20",
};

type Props = {
  variant?: Variant;
} & Required<PropsWithChildren> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const IconButton: FC<Props> = ({
  children,
  type = "button",
  className = "",
  variant = "default",
  ...props
}) => {
  return (
    <button
      className={classNames(
        "p-2 center rounded-sm cursor-pointer",
        styles[variant],
        {
          "!cursor-no-drop opacity-60": props?.disabled,
        },
        className
      )}
      type={type}
      {...props}
    >
      <>{children}</>
    </button>
  );
};
