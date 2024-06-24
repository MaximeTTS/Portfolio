import React from "react";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  text: string;
  iconClass: string;
  link?: string;
}

function ContactItem({ Icon, text, iconClass, link }: Props) {
  const isEmail = text.includes("@");

  return (
    <div className="flex items-center gap-3">
      <Icon className={iconClass} />
      {link || isEmail ? (
        <a
          href={link || `mailto:${text}`}
          className="link-hover-effect text-colorGray"
          target={link ? "_blank" : "_self"}
          rel={link ? "noopener noreferrer" : undefined}
        >
          {text}
        </a>
      ) : (
        <p className="text-colorGray">{text}</p>
      )}
    </div>
  );
}

export default ContactItem;
