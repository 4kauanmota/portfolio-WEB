import React from "react";
import { MouseParallax } from "react-just-parallax";

import styles from "./Background.module.scss";

import Star from "../atoms/Star";
import Comet from "../atoms/Comet";

const Background = () => {
  const stars = [];
  const comets = [];

  const randomQuantityStars = Math.trunc(Math.random() * 20 + 61);
  for (let i = 0; i < randomQuantityStars; i++) {
    stars.push(<Star id={i} key={i} />);
  }
  console.log(`Quantity of stars: ${randomQuantityStars}`);

  const randomQuantityComets = Math.trunc(Math.random() * 15 + 15);
  for (let i = 0; i < randomQuantityComets; i++) {
    comets.push(<Comet id={i} key={i} />);
  }
  console.log(`Quantity of comets: ${randomQuantityComets}`);

  return (
    <>
      <div className={styles.container}>
        <MouseParallax
          strength={0.01}
          enableOnTouchDevice
          isAbsolutelyPositioned
        >
          <div>
            {stars.map((star) => star)}
            {comets.map((comet) => comet)}
          </div>
        </MouseParallax>
      </div>
    </>
  );
};

export default Background;
