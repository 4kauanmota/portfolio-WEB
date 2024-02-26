import React, { useEffect, useState } from "react";
import StarSky from "react-star-sky";

import { MouseParallax } from "react-just-parallax";

import styles from "./SpaceBackground.module.scss";

import Comet from "../atoms/Comet";

const Background = () => {
  const [comets, setComets] = useState([]);

  useEffect(() => {
    const randomQuantityComets = Math.trunc(Math.random() * 15 + 15);
    const cometsArray = [];
    for (let i = 0; i < randomQuantityComets; i++) {
      cometsArray.push(<Comet id={i} key={i} />);
    }
    setComets(cometsArray);
  }, []);

  if (comets) {
    return (
      <>
        <div className={styles.container}>
          <MouseParallax
            strength={0.01}
            enableOnTouchDevice
            isAbsolutelyPositioned
          >
            <div>
              <StarSky
                frameRate={30}
                debugFPS={false}
                style={{ width: "100vw", height: "100vh" }}
              />

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
