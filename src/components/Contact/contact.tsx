import React from "react";
import { BiMap } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import Card from "../card";
import Title from "../title";
import ContactForm from "./contactForm";
import GoogleMap from "./map";
import ContactIcon from "./contactIcon";

function contact() {
  return (
    <Card id="contact">
      <Title textNoColor="Me" textColor="Contacter" />
      <p className="mb-8">N&apos;hésitez pas à me contacter via ce formulaire, par email ou par téléphone.</p>
      <div className="mb-5 grid grid-cols-2">
        <div>
          <ContactIcon text="06.95.46.23.53" Icon={FiPhoneCall} span="Téléphone" />
          <ContactIcon text="maxime.samus@gmail.com" Icon={TfiEmail} span="E-mail" />
          <ContactIcon text="Pontoise" Icon={BiMap} span="Localisation" />
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
