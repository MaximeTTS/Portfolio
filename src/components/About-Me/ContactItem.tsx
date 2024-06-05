import React from "react";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  text: string;
  iconClass: string;
}

const ContactItem: React.FC<Props> = ({ Icon, text, iconClass }) => {
  return (
    <div className="flex items-center gap-3">
      <Icon className={iconClass} />
      <p className="text-colorGray">{text}</p>
    </div>
  );
};

export default ContactItem;
