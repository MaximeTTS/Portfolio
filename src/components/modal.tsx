import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, onPrev, onNext, children }: Props) {
  if (!isOpen) return null;

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleClickOutside}>
      <div className="relative rounded-lg">
        <button onClick={onPrev} className="absolute left-2 top-1/2 -translate-y-1/2 transform text-greyBlack">
          <IoIosArrowBack size={50} />
        </button>
        <button onClick={onNext} className="absolute right-2 top-1/2 -translate-y-1/2 transform text-greyBlack">
          <IoIosArrowForward size={50} />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
