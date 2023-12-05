import React, { PropsWithChildren } from "react";
import cl from "classnames";
import "./index.scss";

interface IFlexBlockProps {
  flexDirection?: "row" | "column";
  className?: string;
}

const FlexBlock: React.FC<PropsWithChildren<IFlexBlockProps>> = ({
  children,
  flexDirection,
  className,
}) => {
  return (
    <div
      className={cl("flex-block", className, {
        "flex-block__column": flexDirection === "column",
        "flex-block__row": flexDirection === "row",
      })}
    >
      {children}
    </div>
  );
};

export default FlexBlock;
