import React from "react";
import { IconType } from "react-icons";

interface Props {
  span: string;
  text: string;
  Icon: IconType;
}

function contactIcon({ span, text, Icon }: Props) {
  return (
    <div className="mb-8">
      <div className="flex h-12 items-center gap-4">
        <Icon className="text-4xl text-themeColor" />
        <div>
          <span className="text-lg">{span}</span>
          <p className="text-sm text-colorGray">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default contactIcon;
