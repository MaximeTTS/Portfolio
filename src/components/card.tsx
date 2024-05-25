import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function card({ children }: Props) {
  return <div className="flex flex-col gap-6 rounded-3xl bg-nightBlack p-8">{children}</div>;
}

export default card;
