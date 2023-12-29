import React, { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import styles from "./Background.module.scss";
import Star from "../atoms/Star";
import Comet from "../atoms/Comet";

const Background = () => {
  const [stars, setStars] = useState([]);
  const [comets, setComets] = useState([]);

  useEffect(() => {
    const randomQuantityStars = Math.trunc(Math.random() * 20 + 61);
    const starsArray = [];
    for (let i = 0; i < randomQuantityStars; i++) {
      starsArray.push(<Star id={i} key={i} />);
    }
    setStars(starsArray);
    console.log(`Quantity of stars: ${randomQuantityStars}`);

    const randomQuantityComets = Math.trunc(Math.random() * 15 + 15);
    const cometsArray = [];
    for (let i = 0; i < randomQuantityComets; i++) {
      cometsArray.push(<Comet id={i} key={i} />);
    }
    setComets(cometsArray);
    console.log(`Quantity of comets: ${randomQuantityComets}`);

    return;
  }, []);

  if (comets && stars) {
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
  }

  return null;
};

export default Background;
