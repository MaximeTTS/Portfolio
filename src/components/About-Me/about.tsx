import { FaDiscord, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { MdGTranslate, MdMarkEmailRead } from "react-icons/md";
import ContactItem from "./ContactItem";
import Card from "../card";
import Title from "../title";

function about() {
  return (
    <Card>
      <Title textNoColor="About" textColor="Me" />
      <p>
        Bonjour, je m&apos;appelle <span className="font-bold">Maxime Turquet</span> et je suis développeur web spécialisé dans le
        Front-End.
        <br /> Passionné par la création de sites web interactifs et esthétiques. <br /> <br /> Toujours en quête de nouveaux défis, je mets
        mes compétences au service de projets innovants pour améliorer l&apos;expérience utilisateur et optimiser les performances web.
      </p>

      <div className="mt-4 text-white">
        <div className="grid grid-cols-2">
          <div className="space-y-3">
            <ContactItem Icon={MdMarkEmailRead} text="maxime.s.turquet@gmail.com" iconClass="text-themeColor" />
            <ContactItem Icon={FaGithub} text="github.com/MaximeTTS" iconClass="text-themeColor" />
            <ContactItem Icon={FaDiscord} text="maximetts" iconClass="text-themeColor" />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default about;
