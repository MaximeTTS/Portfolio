import React from "react";

interface Props {
  institution: string;
  date: string;
  degree: string;
  description: string;
}

function CardQualifications({ institution, date, degree, description }: Props) {
  const formattedDescription = description.replace(/\n/g, "<br />");

  return (
    <div className="flex">
      <div className="flex w-1/3.5 flex-col items-start">
        <h3 className="text-lg font-bold text-white">{institution}</h3>
        <span className="text-sm text-colorGray">{date}</span>
      </div>
      <div className="relative flex w-1/12 flex-col items-center">
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-greyBlack">
          <div className="h-2 w-2 rounded-full bg-themeColor"></div>
        </div>
        <div className="absolute left-1/2 top-4 h-[calc(100%+1rem)] w-0.5 -translate-x-1/2 transform bg-greyBlack200"></div>
      </div>
      <div className="flex w-7/12 flex-col items-start">
        <h4 className="font-semibold text-white">{degree}</h4>
        <p className="text-sm text-colorGray" dangerouslySetInnerHTML={{ __html: formattedDescription }} />
      </div>
    </div>
  );
}

export default CardQualifications;
