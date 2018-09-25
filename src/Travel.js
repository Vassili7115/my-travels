import React from "react";

const Travel = props => (
  <figure>
    <img src={props.image} alt={props.destination} />
    <figcaption>
      <blockquote>{props.destination} located in {props.country} is {props.distance} from Paris</blockquote>
    </figcaption>
  </figure>
);

export default Travel;
