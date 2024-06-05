import React from "react";

interface Props {
  textColor: string;
  textNoColor: string;
}

function title({ textColor, textNoColor }: Props) {
  return (
    <h2 className="text-3xl">
      {textNoColor} <span className="font-bold text-themeColor">{textColor}</span>
    </h2>
  );
}

export default title;
