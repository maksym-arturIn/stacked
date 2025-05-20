import React, { FC } from "react";
import classNames from "classnames";

const styles = {
  h1: "title-1",
  h2: "title-2",
};

type Component = "h1" | "h2";

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
    <Component className={classNames(styles[Component], className)} {...props}>
      {text}
    </Component>
  );
};
