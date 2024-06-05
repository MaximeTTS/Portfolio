import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Props {
  href: string;
  imgSrc: string;
  imgAlt: string;
  subtitle1: string;
  subtitle2: string;
}

function CardProjects({ href, imgSrc, imgAlt, subtitle1, subtitle2 }: Props) {
  return (
    <Link href={href} className="group relative h-full w-full">
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:blur-extra-sm">
          <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" className="cursor-pointer justify-center rounded-lg" />
        </div>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          <span className="transform text-3xl font-bold text-white opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-2 group-hover:scale-110 group-hover:opacity-100">
            {subtitle1}
          </span>
          <span className="mt-2 transform text-3xl font-bold text-themeColor opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-2 group-hover:scale-110 group-hover:opacity-100">
            {subtitle2}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CardProjects;
