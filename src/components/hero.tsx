import { BriefcaseBusiness, Send } from "lucide-react";
import React from "react";
import Button from "./button";
import Card from "./card";
import Image from "next/image";

function Hero() {
  return (
    <Card>
      <div className="flex">
        <div className="flex w-1/2 flex-col gap-8 p-5">
          <h1 className="text-4xl font-bold">
            Portfolio <span className="block text-themeColor">Maxime Turquet</span>
          </h1>
          <p className="text-lg">
            Je suis <span className="font-bold">développeur Front-End</span> et je suis à la recherche de nouvelles expériences.
          </p>
          <div className="flex gap-2">
            <BriefcaseBusiness className="text-themeColor" /> Alternance
          </div>
          <Button>
            <Send className="mr-1 inline size-5" /> Me Contacter
          </Button>
        </div>
        <div className="flex w-1/2">
          <Image src="/maximeturquet.png" alt="Photo de profil Maxime Turquet" width={400} height={300} />
        </div>
      </div>
    </Card>
  );
}

export default Hero;
