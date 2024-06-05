import Link from "next/link";
import Image from "next/image";

interface Props {
  href: string;
  imgSrc: string;
  title: string;
}

const HoverCard = ({ href, imgSrc, title }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <Link href={href} className="block h-full w-full">
        <Image
          src={imgSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          <span className="text-lg font-semibold text-white">{title}</span>
        </div>
      </Link>
    </div>
  );
};

export default HoverCard;
