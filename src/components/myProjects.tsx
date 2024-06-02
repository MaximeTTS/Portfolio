import React from "react";
import Card from "./card";
import Title from "./title";
import Link from "next/link";
import Image from "next/image";

function myProjects() {
  return (
    <Card>
      <Title textNoColor="Mes" textColor="Projets" />
      <section className="grid gap-4 p-4 grid-template-areas-custom">
        <div className="flex h-[300px] w-full items-center justify-center rounded-xl border border-colorSilver bg-nightBlack p-4 grid-area-one">
          <Link href="/Projet-Kasa" className="relative h-full w-full">
            <Image
              src="/images/myProject/kasa/kasa.jpg"
              alt="Project Kasa"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer justify-center rounded-lg"
            />
          </Link>
        </div>
        <div className="flex h-[300px] w-full items-center justify-center rounded-xl border border-colorSilver bg-nightBlack p-4 grid-area-two">
          <Link href="/Projet-Grimoire" className="relative h-full w-full">
            <Image
              src="/images/myProject/grimoire/grimoirezoom.jpg"
              alt="Project Grimoire"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer justify-center rounded-lg"
            />
          </Link>
        </div>
        <div className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl border border-colorSilver bg-nightBlack p-4 grid-area-three">
          <Link href="/Projet-Sophie-Bluel" className="relative h-full w-full">
            <Image
              src="/images/myProject/sophie/shopiee.jpg"
              alt="Project Sophie Bluel"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer justify-center rounded-lg"
            />
          </Link>
        </div>

        <div className="flex h-[300px] w-full items-center justify-center rounded-xl border border-colorSilver bg-nightBlack p-4 grid-area-four">
          <Link href="/Projet-Booki" className="relative h-full w-full">
            <Image
              src="/images/myProject/booki/booki.jpg"
              alt="Project Booki"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer justify-center rounded-lg"
            />
          </Link>
        </div>
      </section>
    </Card>
  );
}

export default myProjects;
