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
      <div className="flex">
        <div className="flex w-1/2 flex-col gap-8 p-5">
          <h1 className="text-3xl">
            Portfolio
            <TypeAnimation
              sequence={["Maxime Turquet", 4000, "Recherche Alternance", 4000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="block whitespace-nowrap font-bold text-themeColor"
            />
          </h1>
          <p>
            <span className="font-bold">Développeur Front-End</span> à la recherche d&apos;un contrat d&apos;apprentissage pour de nouvelles
            expériences.
          </p>
          <div className="flex gap-2">
            <CheckCheck className="text-themeColor" /> Disponible pour une Alternance
          </div>
          <a href="#contact">
            <Button>
              <Send className="mr-1 inline size-5" /> Me Contacter
            </Button>
          </a>
        </div>
        <div className="flex w-1/2">
          <Image src="/maxim.png" alt="Photo de profil Maxime Turquet" width={500} height={400} />
        </div>
      </div>
    </Card>
  );
}

export default Hero;
