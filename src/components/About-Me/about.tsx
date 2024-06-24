import { FaDiscord, FaGithub } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import ContactItem from "./ContactItem";
import Card from "../card";
import Title from "../title";

function about() {
  return (
    <Card>
      <Title textNoColor="À" textColor="Propos" />
      <p>
        Bonjour, je m&apos;appelle <span className="font-bold">Maxime Turquet</span> et je suis développeur web spécialisé dans le
        Front-End.
        <br /> Passionné par la création de sites web interactifs et esthétiques. <br /> <br /> Toujours en quête de nouveaux défis, je mets
        mes compétences au service de projets innovants pour améliorer l&apos;expérience utilisateur et optimiser les performances web.
      </p>

      <div className="mt-4 text-white">
        <div className="grid grid-cols-1 gap-3">
          <ContactItem Icon={MdMarkEmailRead} text="maxime.samus@gmail.com" iconClass="text-xl text-themeColor" />
          <ContactItem
            Icon={FaGithub}
            text="github.com/MaximeTTS"
            iconClass="text-xl text-themeColor"
            link="https://github.com/MaximeTTS"
          />
          <ContactItem Icon={FaDiscord} text="maximetts" iconClass="text-xl text-themeColor" />
        </div>
      </div>
    </Card>
  );
}

export default about;
