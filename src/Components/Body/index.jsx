import React from "react";
import ImageCard from "../Card";

import GreyGown from "../../assets/Seerbit/judeus-samson-0UECcInuCR4-unsplash 1.svg";
import  LightPolo from "../../assets/Seerbit/judeus-samson-0UECcInuCR4-unsplash 1 (1).svg";
import BrownJacket from "../../assets/Seerbit/judeus-samson-0UECcInuCR4-unsplash 2.svg";

import  DarkSleeveless from "../../assets/Seerbit/judeus-samson-0UECcInuCR4-unsplash 2 (1).svg";
import AshBlueSuit  from "../../assets/Seerbit/judeus-samson-0UECcInuCR4-unsplash 3.svg";
import DarkPolo from "../../assets/Seerbit/judeus-samson-0UECcInuCR4-unsplash 3 (1).svg";
const styles = {
  display: "grid",
  alignItems: "center",

  gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
};

const images = [
  {
    id: 1,
    name: "Grey Gown",
    image: GreyGown,
    amount: "$125:00"
  },
  {
    id: 2,
    name: "Ash Blue Suit",
    image:  AshBlueSuit,
    amount: "$225:00"
  },
  {
    id: 3,
    name: "Brown Jacket",
    image: BrownJacket,
    amount: "$180:00"
  },
  {
    id: 4,
    name: "Light Polo",
    image: LightPolo, 
    amount: "$100:00"
  },
  {
    id: 5,
    name: "Dark Sleeveless",
    image: DarkSleeveless,
    amount: "$125:00"
  },
  {
    id: 6,
    name: "Dark Polo",
    image: DarkPolo,
    amount: "$115:00"
  },
];

const BodyLayout = () => {
  return (
    <div className="hidden w-full  gap-10 px-24" style={styles}>
      {images &&
        images.map((item) => (
          <div key={item?.id}>
            <ImageCard item={item} />
          </div>
        ))}
    </div>
  );
};

export default BodyLayout;
