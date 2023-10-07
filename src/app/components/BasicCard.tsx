import React, { ReactNode } from "react";

interface BasicCardProps {
  children: ReactNode;
}

const BasicCard = ({ children }: BasicCardProps) => {
  return (
    <div className="bg-white rounded-lg w-2/4 h-96 p-4 flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default BasicCard;
