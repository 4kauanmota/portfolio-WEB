import React from "react";
import styles from "./scss/Planet.module.scss";

type PlanetType = {
  size: number;
  planet: string;
  description: string;
};

function Planet({ size, planet, description }: PlanetType) {
  return (
    <div style={{ width: size, height: size }} className={styles.planet}>
      <img src={planet} alt={description} />
    </div>
  );
}

export default Planet;
