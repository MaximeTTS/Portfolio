import React from "react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  text: string;
  Icon: IconType;
  iconClass: string;
  span: string;
  spanClass: string;
  textClass: string;
}

function cardService({ title, text, Icon, iconClass, span, spanClass, textClass }: Props) {
  return (
    <div className="card-service">
      <div className="header">
        <span className={spanClass}>{span}</span>
        <Icon className={iconClass} />
      </div>
      <div className={textClass}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default cardService;
