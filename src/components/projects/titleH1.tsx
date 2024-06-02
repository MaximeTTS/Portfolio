import React from "react";

interface Props {
  text1: string;
  text2: string;
  span: string;
}

function TitleH1({ text1, text2, span }: Props) {
  return (
    <h1 className="mt-4 text-3xl font-bold">
      {text1} <span className="text-themeColor">{span}</span> {text2}
    </h1>
  );
}

export default TitleH1;
