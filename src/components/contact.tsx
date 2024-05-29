import React from "react";
import Card from "./card";
import Title from "./title";
import { BiMap } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import ContactIcon from "./contactIcon";
import ContactForm from "./contactForm";
import GoogleMap from "./map";

function contact() {
  return (
    <Card>
      <Title textNoColor="Me" textColor="Contacter" />
      <p className="mb-8">
        N&apos;hésitez pas à me contacter en utilisant ce formulaire, par email ou par téléphone. <br />
        Je suis à votre disposition pour répondre à toutes vos questions.
      </p>
      <div className="mb-5 grid grid-cols-2">
        <div>
          <ContactIcon text="Pontoise" Icon={BiMap} span="Localisation" />
          <ContactIcon text="maxime.samus@gmail.com" Icon={TfiEmail} span="E-mail" />
          <ContactIcon text="06.95.46.25.04" Icon={FiPhoneCall} span="Téléphone" />
        </div>
        <ContactForm />
      </div>
      <div className="flex justify-center rounded-xl bg-greyBlack p-3">
        <GoogleMap />
      </div>
    </Card>
  );
}

export default contact;
