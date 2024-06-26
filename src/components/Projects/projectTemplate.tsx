"use client";
import React, { useState } from "react";
import Card from "../card";
import Image from "next/image";
import Modal from "./modal";
import TitleH1 from "./titleH1";
import TextProject from "./textProject";
import GitHubLink from "./githubLink";
import Lines from "../animationBg";
import BtnReturn from "./btnReturn";
import { IoIosArrowRoundBack } from "react-icons/io";

interface Props {
  title: string;
  title2: string;
  title3: string;
  text: string;
  text2: string;
  text3: string;
  span: string;
  span2: string;
  span3: string;
  src: string;
  alt: string;
  descriptionTitle: string;
  descriptionText: string;
  descriptionTitle2: string;
  descriptionText2: string;
  descriptionPoints: string[];
  images: { src: string; alt: string }[];
  gitHubUrl: string;
  webSiteUrl?: string;
  figmaUrl: string;
}

function ProjectTemplate({
  title,
  title2,
  title3,
  text,
  text2,
  text3,
  span,
  span2,
  span3,
  src,
  alt,
  descriptionTitle,
  descriptionText,
  descriptionTitle2,
  descriptionText2,
  descriptionPoints,
  images,
  gitHubUrl,
  webSiteUrl,
  figmaUrl,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showPrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Card>
      <Lines hideMiddleLine />
      <BtnReturn Icon={IoIosArrowRoundBack} />
      <TitleH1 text1={title} text2={title2} span=" | " />
      <div className="mt-5 flex h-[400px] w-full items-center justify-center">
        <div className="relative h-full w-full max-w-4xl">
          <Image src={src} alt={alt} layout="fill" className="rounded-xl object-cover" />
        </div>
      </div>
      <div className="mb-2 mt-4 text-white sm:flex sm:justify-between">
        <div>
          <span className="block pb-1 font-bold">{span}</span>
          <p className="mb-3 text-colorSilver">{text}</p>
        </div>
        <div>
          <span className="block pb-1 font-bold">{span2}</span>
          <p className="mb-3 text-colorSilver">{text2}</p>
        </div>
        <div>
          <span className="block pb-1 font-bold">{span3}</span>
          <p className="text-colorSilver">{text3}</p>
        </div>
      </div>
      <TextProject
        title={descriptionTitle}
        description={descriptionText}
        title2={descriptionTitle2}
        description2={descriptionText2}
        title3={title3}
        points={descriptionPoints}
      />
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5">
        {images.map((image, index) => (
          <div key={index} className="group relative h-[300px] w-full cursor-pointer" onClick={() => openModal(index)}>
            <div className="icon-3d relative h-full w-full">
              <Image src={image.src} alt={image.alt} layout="fill" className="rounded-xl object-cover" />
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} onPrev={showPrevImage} onNext={showNextImage}>
          <Image src={images[currentIndex].src} alt={images[currentIndex].alt} width={800} height={600} className="rounded-xl" />
        </Modal>
      )}
      <div className="mt-4">
        <GitHubLink url={gitHubUrl} url2={figmaUrl} url3={webSiteUrl} />
      </div>
    </Card>
  );
}

export default ProjectTemplate;
