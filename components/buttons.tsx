import { FC, PropsWithChildren } from "react";

const Button: FC<
  PropsWithChildren & {
    className: string;
    id?: string;
  }
> = ({ children, className, id }) => {
  return (
    <button id={id} className={"btn " + className}>
      {children}
    </button>
  );
};

const PrimaryButton: FC<
  PropsWithChildren & {
    className?: string;
    id?: string;
  }
> = ({ children, className, id }) => {
  return (
    <Button
      id={id}
      className={"btn-primary text-light" + (className ? " " + className : "")}
    >
      {children}
    </Button>
  );
};

export { Button, PrimaryButton };
