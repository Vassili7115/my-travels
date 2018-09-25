import React from "react";
import Travel from "./Travel";


// src/Travels.js
const travels = [
  {
    destination:"New York",
    country:"United States",
    image:"https://cdn.connections.be/destinations/NewYork/NYTimesSquare.jpg",
    distance:"5834 km",
  },
  {
    destination:"Copenhagen",
    country:"Denmark",
    image:"http://tetu.com/content/uploads/2016/07/Sans-titre-2-10.jpg",
    distance:"1215 km",
  },
  {
    destination:"Amsterdam",
    country:"Netherland",
    image:"http://www.place-des-vacances.com/assets/images/guide/56-1446136872.jpg",
    distance:"480 km",
  },
  {
    destination:"Berlin",
    country:"Germany",
    image:"https://www.visitberlin.de/system/files/styles/visitberlin_bleed_header_visitberlin_mobile_1x/private/image/iStock_26486275_istock.com_sborisov_DL_PPT_0.jpg?h=e5aec6c8&itok=H55Hh11q",
    distance:"980 km",
  },
  {
    destination:"Rome",
    country:"Italy",
    image:"https://www.connections.be/~/media/images/connections/vliegtickets/europa/rome/romefountain.jpg",
    distance:"1180 km",
  }
];

const Travels = () => (
  <div>
    {travels.map((travel, index) =>
      <Travel key={index} {...travel}/>
    )}
  </div>
);

export default Travels;
