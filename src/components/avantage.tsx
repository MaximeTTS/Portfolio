import React from "react";
import Card from "./card";
import Title from "./title";
import AvantageIcon from "./avantageIcon";

function avantage() {
  return (
    <Card>
      <Title textNoColor="Mes" textColor="Compétences" />
      <p>
        Pour donner vie à vos idées, mes compétences en développement front-end me permettent <br /> de développer des interfaces
        utilisateur réactives, performantes et esthétiquement remarquables.
      </p>
      <div className="my-5 flex justify-center">
        <div className="grid grid-cols-5 gap-x-16 gap-y-6">
          <AvantageIcon src="/css.svg" alt="CSS Icon" width={60} height={60} text="CSS" />
          <AvantageIcon src="/html.svg" alt="HTML Icon" width={60} height={60} text="HTML" />
          <AvantageIcon src="/react.svg" alt="React Icon" width={60} height={60} text="React" />
          <AvantageIcon src="/nextjs.svg" alt="Next.js Icon" width={60} height={60} text="Next.js" />
          <AvantageIcon src="/javascript.svg" alt="JavaScript Icon" width={60} height={60} text="JavaScript" />
          <AvantageIcon src="/sass.svg" alt="SASS Icon" width={60} height={60} text="SASS" />
          <AvantageIcon src="/node.svg" alt="Node.js Icon" width={60} height={60} text="Node.js" />
          <AvantageIcon src="/mongo.svg" alt="MongoDB Icon" width={60} height={60} text="MongoDB" />
          <AvantageIcon src="/tailwindcss.svg" alt="Tailwind CSS Icon" width={60} height={60} text="Tailwind CSS" />
          <AvantageIcon src="/typescript.svg" alt="TypeScript Icon" width={60} height={60} text="TypeScript" />
        </div>
      </div>
    </Card>
  );
}

export default avantage;
