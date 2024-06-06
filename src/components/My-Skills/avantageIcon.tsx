import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  text: string;
}

function AvantageIcon({ src, alt, width, height, text }: Props) {
  return (
    <div className="group flex flex-col items-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="icon-3d duration-300e grayscale filter transition-transform ease-in-out group-hover:filter-none group-hover:transform-50"
      />
      <p className="mt-1 h-6 text-center text-colorSilver ease-in-out group-hover:text-white">{text}</p>
    </div>
  );
}

export default AvantageIcon;
