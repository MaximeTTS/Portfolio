import React from "react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  text: string;
  Icon: IconType;
  span: string;
  className?: string;
}

function CardService({ title, text, Icon, span, className }: Props) {
  return (
    <div
      className={`group flex flex-col gap-4 rounded-2xl border-greyBlack200 border p-8 w-406px transition duration-300 ease-in-out ${className}`}
    >
      <div className="flex items-start justify-between">
        <span className="text-7xl font-bold text-transparent text-black-stroke">{span}</span>
        <Icon className="text-3xl transition-colors duration-300 ease-in-out group-hover:text-themeColor" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CardService;
