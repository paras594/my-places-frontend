import { PropsWithChildren } from "react";

type Props = {
  className?: string;
} & PropsWithChildren;

const Container = ({ children, className }: Props) => {
  const defaultClasses = "container mx-auto px-4";

  return <div className={`${defaultClasses} ${className}`}>{children}</div>;
};

export default Container;
