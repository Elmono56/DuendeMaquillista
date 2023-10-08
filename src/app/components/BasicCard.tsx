import React, { ReactNode } from "react";

interface BasicCardProps {
  children: ReactNode;
  size?: "small" | "medium" | "large"; // Define tamaños personalizados
}

const BasicCard = ({ children, size = "medium" }: BasicCardProps) => {
  let cardSize = "w-2/4 h-96"; // Tamaño predeterminado

  // Aplica clases de tamaño según la propiedad size
  if (size === "small") {
    cardSize = "w-2/4 h-64";
  } else if (size === "large") {
    cardSize = "w-2/4 h-120";
  }

  return (
    <div className={`bg-white rounded-lg p-4 flex flex-col items-center justify-center ${cardSize}`}>
      {children}
    </div>
  );
};


export default BasicCard;
