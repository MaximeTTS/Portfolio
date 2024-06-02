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
        text2="HTML | CSS | JavaScript"
        span3="Durée"
        text3="30h"
        src="/images/myProject/sophie/shopiebluel.jpg"
        alt="Project Booki"
        descriptionTitle="Contexte du Projet"
        descriptionText="Vous travaillez comme développeur front-end pour l'agence ArchiWebos et avez été détaché en renfort 
        au sein d'une équipe chargée de concevoir le site portfolio d'une architecte d'intérieur."
        descriptionTitle2="Rôle et Responsabilités"
        descriptionText2="En tant que développeur front-end, j'étais responsable de plusieurs aspects clés du développement du site portfolio. 
        Mon rôle principal consistait à intégrer les maquettes fournies pour créer une interface utilisateur attrayante et fonctionnelle. "
        descriptionPoints={[
          "Assurer la persistance des données et tester les nouvelles fonctionnalités en intégrant le code back-end.",
          "Développer la page de connexion et la modale d’upload de médias à partir de zéro.",
          "Garantir que toutes les pages et fonctionnalités soient entièrement responsive et fonctionnelles. ",
        ]}
        images={[
          { src: "/images/myProject/sophie/sophie_home.png", alt: "Image 1" },
          { src: "/images/myProject/sophie/sophie_end.png", alt: "Image 2" },
        ]}
        gitHubUrl="https://github.com/MaximeTTS/projet-sophie-bluel"
        webSiteUrl="https://booki.example.com"
      />
    </main>
  );
}
