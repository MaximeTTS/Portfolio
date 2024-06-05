import React from "react";
import Card from "../card";
import Title from "../title";
import CardQualifications from "./cardQualifications";

function myQualifications() {
  return (
    <Card>
      <Title textNoColor="Mon" textColor="Parcours" />
      <div className="mt-4 space-y-8">
        <CardQualifications
          institution="OpenClassrooms"
          date="2023-2024"
          degree="développeut Web"
          description="Formation de développeur Web équivalent Bac +2 <br /> chez OpenClassrooms."
        />
        <CardQualifications
          institution="Aux Stores Sartrouvillois"
          date="2022-2023"
          degree="Rédacteur SEO"
          description="Création de fiche produit et article de blog optimisée <br /> pour les moteurs de recherche."
        />
        <CardQualifications
          institution="Ensitech"
          date="2020-2022"
          degree="BTS SIO SISR"
          description="Deux années en services informatiques aux organisations <br /> option solutions d'infrastructure, systèmes et réseaux."
        />
      </div>
    </Card>
  );
}

export default myQualifications;
