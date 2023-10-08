import React, { ReactNode } from "react";

interface BasicCardProps {
  children: ReactNode;
}

const BasicCard = ({ children }: BasicCardProps) => {
  return (
    <div
      className={`bg-white rounded-lg p-4 flex flex-col items-center justify-center w-2/4`}
    >
      {children}
    </div>
  );
};

export default BasicCard;
