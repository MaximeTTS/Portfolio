import React from "react";
import Card from "./card";
import Title from "./title";
import CardService from "./cardService";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { MdPhonelink } from "react-icons/md";

function myService() {
  return (
    <div>
      <Card>
        <Title textNoColor="Mes" textColor="Services" />
        <p className="mb-3">
          Transformez vos idées en expériences interactives et captivantes. <br />
          De la conception de sites web réactifs à la création d&apos;interfaces utilisateur intuitives <br /> je vous aide à donner vie à
          vos projets numériques avec élégance et efficacité.
        </p>
        <section className="max-h-406px grid grid-cols-2 items-center gap-5">
          <CardService
            title="Web Development"
            text="Je développe des sites web performants et sur mesure pour répondre à vos besoins."
            Icon={FaLaptopCode}
            span="01"
          />
          <CardService
            title="SEO / Marketing"
            text="J'optimise votre référencement en ligne pour améliorer votre visibilité."
            Icon={MdOutlineRocketLaunch}
            span="02"
          />
          <CardService
            title="UI/UX Design"
            text="Je conçois des interfaces et expériences utilisateur intuitives."
            Icon={MdPhonelink}
            span="03"
            className="col-span-2 w-406px place-self-center"
          />
        </section>
      </Card>
    </div>
  );
}

export default myService;
