import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Button({ children }: Props) {
  return (
    <div className="w-fit cursor-pointer rounded-full bg-themeColor px-5 py-4 font-bold text-white transition-all hover:shadow-customHover">
      {children}
    </div>
  );
}

export default Button;
