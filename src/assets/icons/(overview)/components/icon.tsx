import React from "react";

export interface IconProps {
  width?: number;
  height?: number;
  className?: string;
  fillColor?: string;
  viewBox?: string;
  children?: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  className = "",
  fillColor = "currentColor",
  viewBox = "0 0 24 24",
  children,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={width}
      height={height}
      className={className}
      fill={fillColor}
    >
      {children}
    </svg>
  );
};

export default Icon;
