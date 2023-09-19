import React from "react";

import styles from "./Background.module.scss";
import Star from "../atoms/Star";
import Comet from "../atoms/Comet";
import { MouseParallax } from "react-just-parallax";

import BlueDustTop from "../../../public/assets/img/blue-dust-top.png";
import BlueDustBottom from "../../../public/assets/img/blue-dust-bottom.png";

const Background = () => {
  const stars = [];
  const comets = [];

  const randomQuantity = Math.trunc(Math.random() * 20 + 31);
  for (let i = 0; i < 30 + randomQuantity; i++) {
    stars.push(<Star id={i} key={i} />);
    comets.push(<Comet id={i} key={i} />);
  }

  return (
    <>
      <div className={styles.container}>
        <MouseParallax strength={0.01}>
          <img src={BlueDustTop} className={styles.blueDustTop} />

          <img src={BlueDustBottom} className={styles.blueDustBottom} />

          <MouseParallax strength={0.015}>
            <div>
              {stars.map((star) => star)}
              {comets.map((comet) => comet)}
            </div>
          </MouseParallax>
        </MouseParallax>
      </div>
    </>
  );
};

export default Background;
