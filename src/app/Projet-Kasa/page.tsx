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
        text2="React | Sass | TypeScript"
        span3="Durée"
        text3="45h"
        src="/images/myProject/kasa/kasa.jpg"
        alt="Project Booki"
        descriptionTitle="Contexte du Projet"
        descriptionText="Vous travaillez comme développeur front-end pour l’agence ArchiWebos et avez été détaché en renfort au sein d’une équipe chargée de concevoir 
        le site portfolio d’une architecte d’intérieur."
        descriptionTitle2="Rôle et Responsabilités"
        descriptionText2="En tant que développeur web, mon rôle était de développer l'ensemble de l'application et ses composants en utilisant React, 
        conformément aux maquettes Figma fournies. Vous devrez créer des composants réutilisables, 
        notamment pour les onglets ouvrants et le carrousel de photos."
        descriptionPoints={[
          "Développer l'application React en accord avec la maquette",
          "Utilisation de React-router, ainsi que SASS",
          "Créer des composants réutilisables pour les fonctionnalités clés",
          "Assurer que l'application soit responsive sur tous les types et tailles d'écrans",
        ]}
        images={[
          { src: "/images/myProject/kasa/kasa_home.png", alt: "Accueil kasa" },
          { src: "/images/myProject/kasa/kasa_end.png", alt: "kasa" },
        ]}
        gitHubUrl="https://github.com/MaximeTTS/kasa"
        webSiteUrl="https://booki.example.com"
      />
    </main>
  );
}
