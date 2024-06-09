import React from "react";
import Card from "../card";
import Title from "../title";
import CardProjects from "./cardProjects";

function myProjects() {
  return (
    <Card>
      <Title textNoColor="Mes" textColor="Projets" />
      <section className="grid gap-4 sm:p-4 sm:grid-template-areas-custom">
        <div className="flex h-[300px] w-full items-center justify-center rounded-xl border border-colorSilver bg-nightBlack p-4 sm:grid-area-one">
          <CardProjects
            href="/Projet-Kasa"
            imgSrc="/images/myProject/kasa/kasa.jpg"
            imgAlt="Project Kasa"
            subtitle1="Projet"
            subtitle2="Kasa"
          />
        </div>
        <div className="flex h-[300px] w-full items-center justify-center rounded-xl border border-colorSilver bg-nightBlack p-4 sm:grid-area-two">
          <CardProjects
            href="/Projet-Grimoire"
            imgSrc="/images/myProject/grimoire/grimoirezoom.jpg"
            imgAlt="Project Grimoire"
            subtitle1="Projet"
            subtitle2="Grimoire"
          />
        </div>
        <div className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl border border-colorSilver bg-nightBlack p-4 sm:grid-area-three">
          <CardProjects
            href="/Projet-Sophie-Bluel"
            imgSrc="/images/myProject/sophie/sophieblu.jpg"
            imgAlt="Project Sophie Bluel"
            subtitle1="Projet"
            subtitle2="Sophie Bluel"
          />
        </div>
        <div className="flex h-[300px] w-full items-center justify-center rounded-xl border border-colorSilver bg-nightBlack p-4 sm:grid-area-four">
          <CardProjects
            href="/Projet-Booki"
            imgSrc="/images/myProject/booki/bookii.jpg"
            imgAlt="Project Booki"
            subtitle1="Projet"
            subtitle2="Booki"
          />
        </div>
      </section>
    </Card>
  );
}

export default myProjects;
