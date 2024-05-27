import React from "react";
import Card from "./card";
import Title from "./title";

function myService() {
  return (
    <div>
      <Card>
        <Title textNoColor="Mes" textColor="Services" />
        <p>
          Transformez vos idées en expériences interactives et captivantes. <br />
          De la conception de sites web réactifs à la création d&apos;interfaces utilisateur intuitives <br /> je vous aide à donner vie à
          vos projets numériques avec élégance et efficacité.
        </p>
        <section className="grid grid-cols-2 items-center gap-5"></section>
      </Card>
    </div>
  );
}

export default myService;
