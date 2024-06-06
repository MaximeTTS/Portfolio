import React, { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Card({ children, ...props }: Props) {
  return (
    <div {...props} className="relative flex flex-col gap-4 rounded-3xl bg-nightBlack p-8">
      {children}
    </div>
  );
}

export default Card;
