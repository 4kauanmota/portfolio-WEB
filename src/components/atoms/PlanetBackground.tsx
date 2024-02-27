import React from "react";
import StarSky from "react-star-sky";

import styles from "./PlanetBackground.module.scss";

type PlanetBackgroundType = {
  children: any;
};

const PlanetBackground = ({ children }: PlanetBackgroundType) => {
  return (
    <div className={styles.container}>
      <StarSky
        frameRate={30}
        debugFPS={false}
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: 1,
        }}
      />
      {children}
    </div>
  );
};

export default PlanetBackground;
