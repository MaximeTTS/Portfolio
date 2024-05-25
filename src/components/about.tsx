import React from "react";
import Card from "./card";
import Title from "./title";

function about() {
  return (
    <Card>
      <Title textNoColor="About" textColor="Me" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore rerum quasi obcaecati atque unde, possimus similique sequi
        voluptatibus exercitationem voluptatum reiciendis hic facere sapiente tempora deserunt corporis commodi voluptatem dolores.
      </p>
    </Card>
  );
}

export default about;
