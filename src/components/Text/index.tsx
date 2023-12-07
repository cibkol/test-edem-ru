import React, { PropsWithChildren } from "react";
import cl from "classnames";
import "./index.scss";

type fontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

interface ITextProps {
  className?: string;
  fontSize?: number;
  fontWeight?: fontWeight;
  maxWidth?: string;
  lineHeight?: string;
  color?: string;
}

const Text: React.FC<PropsWithChildren<ITextProps>> = ({
  children,
  fontSize,
  fontWeight,
  className,
  maxWidth,
  lineHeight,
  color,
}) => {
  return (
    <span
      style={{ fontSize, fontWeight, maxWidth, lineHeight }}
      className={cl(
        "text-component",
        className,
        color && "text-component__" + color
      )}
    >
      {children}
    </span>
  );
};

export default Text;
