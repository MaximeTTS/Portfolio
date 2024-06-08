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
    <div className="flex flex-col sm:flex-row">
      <div className="order-1 flex w-full flex-col items-start sm:order-none sm:w-1/3.5">
        <span className="text-base font-bold text-white sm:text-lg">{institution}</span>
        <span className="pb-2 text-xs text-colorGray sm:pb-0 sm:text-sm">{date}</span>
      </div>
      <div className="relative order-2 hidden w-full flex-col items-center sm:order-none sm:flex sm:w-1/12">
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-greyBlack">
          <div className="h-2 w-2 rounded-full bg-themeColor"></div>
        </div>
        <div className="absolute left-1/2 top-4 h-[calc(100%+1rem)] w-0.5 -translate-x-1/2 transform bg-greyBlack200"></div>
      </div>
      <div className="order-3 flex w-full flex-col items-start sm:order-none sm:w-7/12">
        <span className="text-sm font-semibold text-white sm:text-lg">{degree}</span>
        <p className="text-sm text-colorGray" dangerouslySetInnerHTML={{ __html: formattedDescription }} />
      </div>
    </div>
  );
}

export default CardQualifications;
