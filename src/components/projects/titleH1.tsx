import React from "react";

interface Props {
  text1: string;
  text2: string;
  span: string;
}

function TitleH1({ text1, text2, span }: Props) {
  return (
    <h1 className="text-2xl font-bold sm:mt-4 sm:text-3xl">
      {text1} <span className="text-themeColor">{span}</span> {text2}
    </h1>
  );
}

export default TitleH1;
