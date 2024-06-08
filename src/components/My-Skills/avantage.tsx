import Card from "../card";
import Title from "../title";
import AvantageIcon from "./avantageIcon";

function avantage() {
  return (
    <Card>
      <Title textNoColor="Mes" textColor="Compétences" />
      <div className="my-5 flex justify-center">
        <div className="grid grid-cols-2 gap-x-16 gap-y-6 sm:grid-cols-5">
          <AvantageIcon src="/css.svg" alt="CSS Icon" width={50} height={50} text="CSS" />
          <AvantageIcon src="/html.svg" alt="HTML Icon" width={50} height={50} text="HTML" />
          <AvantageIcon src="/react.svg" alt="React Icon" width={50} height={50} text="React" />
          <AvantageIcon src="/nextjs.svg" alt="Next.js Icon" width={50} height={50} text="Next.js" />
          <AvantageIcon src="/javascript.svg" alt="JavaScript Icon" width={50} height={50} text="JavaScript" />
          <AvantageIcon src="/sass.svg" alt="SASS Icon" width={50} height={50} text="SASS" />
          <AvantageIcon src="/node.svg" alt="Node.js Icon" width={50} height={50} text="Node.js" />
          <AvantageIcon src="/mongo.svg" alt="MongoDB Icon" width={50} height={50} text="MongoDB" />
          <AvantageIcon src="/tailwindcss.svg" alt="Tailwind CSS Icon" width={50} height={50} text="Tailwind" />
          <AvantageIcon src="/typescript.svg" alt="TypeScript Icon" width={50} height={50} text="TypeScript" />
        </div>
      </div>
    </Card>
  );
}

export default avantage;
