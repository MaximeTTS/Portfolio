import ProjectTemplate from "@/components/Projects/projectTemplate";
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
        text2="HTML | CSS"
        span3="Durée"
        text3="30h"
        src="/images/myProject/booki/bookii.jpg"
        alt="Project Booki"
        descriptionTitle="Contexte du Projet"
        descriptionText="Booki est mon premier projet de développement web, réalisé lors de ma formation chez OpenClassrooms. 
        Ce projet m'a permis de concrétiser mes compétences en HTML et CSS en transformant des maquettes en une interface web fonctionnelle."
        descriptionTitle2="Rôle et Responsabilités"
        descriptionText2="En tant que développeur web, mon rôle était de convertir les maquettes fournies par l'équipe UI en une page web opérationnelle. 
        Mon objectif principal était de créer une interface utilisateur fidèle aux maquettes et parfaitement fonctionnelle. 
        J'ai également veillé à ce que le site soit entièrement responsive, garantissant une expérience utilisateur optimale sur toutes les plateformes."
        descriptionPoints={[
          "Assurer que le site soit responsive, s'adaptant parfaitement aux différentes tailles d'écran",
          "Respecter les meilleures pratiques de développement web pour HTML et CSS",
          "Respecter la structure des fichiers à savoir un dossier images, HTML et CSS ",
        ]}
        images={[
          { src: "/images/myProject/booki/booki_home.png", alt: "Acceuil booki" },
          { src: "/images/myProject/booki/booki_end.png", alt: "booki" },
        ]}
        gitHubUrl="https://github.com/MaximeTTS/booki-projet"
        figmaUrl="https://www.figma.com/design/r9YJyUkpVdrxzBBKGH7reY/Maquettes-Booki-(desktop%2C-mobile%2C-tablette)"
        webSiteUrl="https://maximetts.github.io/booki-projet/"
      />
    </main>
  );
}
