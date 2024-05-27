import React from "react";
import Card from "./card";
import Title from "./title";
import { FaDiscord, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { MdGTranslate, MdMarkEmailRead } from "react-icons/md";
import ContactItem from "./ContactItem";

function about() {
  return (
    <Card>
      <Title textNoColor="About" textColor="Me" />
      <p>
        Bonjour, je m&apos;appelle <span className="font-bold">Maxime Turquet</span> et je suis développeur web spécialisé dans le
        Front-End.
        <br /> Passionné par la création de sites web interactifs et esthétiques. <br />
        <br />
        Toujours en quête de nouveaux défis, je mets mes compétences au service de projets innovants <br /> pour améliorer l&apos;expérience
        utilisateur et optimiser les performances web.
      </p>

      <div className="mt-2 text-white">
        <div className="grid grid-cols-2">
          <div className="space-y-3">
            <ContactItem Icon={FaPhoneAlt} text="+ (2) 870 174 302" iconClass="text-themeColor" />
            <ContactItem Icon={FaDiscord} text="brown@com" iconClass="text-themeColor" />
            <ContactItem Icon={MdGTranslate} text="Français, Anglais" iconClass="text-themeColor" />
          </div>
          <div className="space-y-3">
            <ContactItem Icon={MdMarkEmailRead} text="info@example.com" iconClass="text-themeColor" />
            <ContactItem Icon={FaGithub} text="github.com/user" iconClass="text-themeColor" />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default about;
