import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button className="bg-pink-200 px-4 py-2 rounded-3xl ">{text}</button>;
};

export default Button;
