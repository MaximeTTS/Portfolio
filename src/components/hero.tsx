"use client";

import { CheckCheck, Send } from "lucide-react";
import React from "react";
import Button from "./button";
import Card from "./card";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <Card>
      <div className="flex flex-col sm:flex-row">
        <div className="flex w-full flex-col gap-5 sm:w-1/2 sm:gap-8 sm:p-5">
          <h1 className="text-2xl sm:text-3xl">
            Portfolio
            <TypeAnimation
              sequence={["Maxime Turquet", 4000, "Recherche Alternance", 4000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="block whitespace-nowrap font-bold text-themeColor"
            />
          </h1>
          <p className="text-md sm:text-lg">
            <span className="font-bold">Développeur Front-End</span> à la recherche d&apos;un contrat d&apos;apprentissage pour de nouvelles
            expériences.
          </p>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <CheckCheck className="size-5 text-themeColor sm:size-6" /> Disponible pour une Alternance
          </div>
          <a href="#contact">
            <Button>
              <Send className="mr-1 inline size-4 sm:size-5" /> Me Contacter
            </Button>
          </a>
        </div>
        <div className="hidden w-full p-5 sm:flex sm:w-1/2">
          <Image src="/maximeProfil.png" alt="Photo de profil Maxime Turquet" width={800} height={300} />
        </div>
      </div>
    </Card>
  );
}

export default Hero;
