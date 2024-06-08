import React from "react";
import { IconType } from "react-icons";
import { IoIosArrowRoundBack } from "react-icons/io";

interface Props {
  Icon: IconType;
}

function BtnReturn({ Icon }: Props) {
  const handleReturn = () => {
    window.history.back();
  };

  return (
    <div onClick={handleReturn} className="flex cursor-pointer items-center">
      <Icon className="h-8 w-8" />
      <p className="ml-2 hover:text-themeColor">Retour</p>
    </div>
  );
}

export default BtnReturn;
