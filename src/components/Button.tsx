import classNames from "classnames";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from "react";

type Variant = "brand";

const styles: Record<Variant, string> = {
  brand: "bg-brand active:bg-secondary-brand",
};

type Props = {
  variant?: Variant;
} & Required<PropsWithChildren> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: FC<Props> = ({
  children,
  type = "button",
  variant = "brand",
  className = "",
  ...props
}) => {
  return (
    <button
      className={classNames(
        "rounded-sm cursor-pointer w-full",
        styles[variant],
        className
      )}
      type={type}
      {...props}
    >
      <>{children}</>
    </button>
  );
};
