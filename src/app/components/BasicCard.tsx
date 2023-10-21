import React, { ReactNode } from "react";

interface BasicCardProps {
  children: ReactNode;
}

const BasicCard = ({ children }: BasicCardProps) => {
  return (
    <div
      className={`bg-white rounded-lg p-4 flex flex-col items-center justify-center w-[45.625rem] h-[34.6875rem]`}
    >
      {children}
    </div>
  );
};

export default BasicCard;
