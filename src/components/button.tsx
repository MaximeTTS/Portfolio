import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

function Button({ children, type = "button" }: Props) {
  return (
    <button
      type={type}
      className="w-fit cursor-pointer rounded-3xl bg-themeColor px-5 py-4 font-bold text-white transition-all hover:shadow-customHover"
    >
      {children}
    </button>
  );
}

export default Button;
