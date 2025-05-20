import React, { FC } from "react";
import classNames from "classnames";

const styles = {
  h1: "title-1",
  h2: "",
  h3: "",
  h4: "",
  h5: "",
  h6: "",
};

type Component = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = {
  text: string;
  component?: Component;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const Title: FC<Props> = ({
  text,
  className,
  component: Component = "h1",
  ...props
}) => {
  return (
    <Component
      className={classNames(
        "text-3xl font-tactic",
        styles[Component],
        className
      )}
      {...props}
    >
      {text}
    </Component>
  );
};
