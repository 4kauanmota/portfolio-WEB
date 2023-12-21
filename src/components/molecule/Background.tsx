import React from "react";
import { MouseParallax } from "react-just-parallax";

import styles from "./Background.module.scss";

import Star from "../atoms/Star";
import Comet from "../atoms/Comet";

const Background = () => {
  const stars = [];
  const comets = [];

  const randomQuantity = Math.trunc(Math.random() * 20 + 31);
  for (let i = 0; i < 30 + randomQuantity; i++) {
    stars.push(<Star id={i} key={i} />);
  }
  for (let i = 0; i < 10; i++) {
    comets.push(<Comet id={i} key={i} />);
  }

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
