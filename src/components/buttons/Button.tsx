import React from "react";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="text-sm text-font-dark rounded-md uppercase bg-white/80 hover:bg-white/80 px-6 py-3.5 transition-all duration-300">
      {title}
    </button>
  );
};

export default Button;
