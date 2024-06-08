import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

function Button({ children, type = "button" }: Props) {
  return (
    <button
      type={type}
      className="w-fit cursor-pointer rounded-3xl bg-themeColor px-3 py-3 text-sm font-bold text-white transition-all hover:shadow-customHover sm:px-5 sm:py-4 sm:text-base"
    >
      {children}
    </button>
  );
}

export default Button;
