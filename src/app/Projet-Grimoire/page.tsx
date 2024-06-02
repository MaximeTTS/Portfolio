import ProjectTemplate from "@/components/projects/projectTemplate";
import React from "react";

export default function Booki() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 bg-power__black py-12">
      <ProjectTemplate
        title="Projet Booki"
        title2="Site de Réservation"
        title3="Contrainte à Respecter"
        span="Projet"
        text="Scolaire"
        span2="Langages"
        text2="Node.js | MongoDB | TypeScript"
        span3="Durée"
        text3="25h"
        src="/images/myProject/grimoire/grimoire.jpg"
        alt="Project Booki"
        descriptionTitle="Contexte du Projet"
        descriptionText="Le projet consiste à développer un site de notation de livres pour la chaîne de librairies Le Vieux Grimoire à Lille. 
        La mission implique la mise en place de la partie back-end, tandis que le front-end a déjà été développé en React."
        descriptionTitle2="Rôle et Responsabilités"
        descriptionText2="En tant que développeur back-end, mon rôle était d'assurer l'intégration fluide entre le front-end et le back-end pour garantir le bon fonctionnement de l'application web. 
        J'étais également responsable de la mise en place des fonctionnalités liées à la création de comptes utilisateurs, 
        en veillant à la sécurité pour prévenir les injections de code malveillant via les adresses e-mail et autres points d'entrée. 
        De plus, j'ai optimisé les images afin de réduire l'impact environnemental, conformément aux principes du Green Code."
        descriptionPoints={[
          "Assurer une intégration fluide et sans bugs entre le front-end en React et le back-end",
          "Mettre en place des mesures de sécurité robustes pour protéger contre les attaques de code malveillant",
          "Optimiser les images pour minimiser leur impact environnemental, conformément aux bonnes pratiques",
        ]}
        images={[
          { src: "/images/myProject/grimoire/grimoire_home.png", alt: "Image 1" },
          { src: "/images/myProject/grimoire/grimoire_end.png", alt: "Image 2" },
        ]}
        gitHubUrl="https://github.com/MaximeTTS/Mon-Vieux-Grimoire"
        webSiteUrl="https://booki.example.com"
      />
    </main>
  );
}
