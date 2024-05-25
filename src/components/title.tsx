import React from "react";

interface Props {
  textColor: string;
  textNoColor: string;
}

function title({ textColor, textNoColor }: Props) {
  return (
    <h2 className="text-3xl font-bold">
      {textNoColor} <span className="text-themeColor">{textColor}</span>
    </h2>
  );
}

export default title;
