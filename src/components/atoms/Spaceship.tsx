import React from "react";

import styles from "./Spaceship.module.scss";

import structure from "../../../public/assets/img/spaceship/structure.png";
import hud from "../../../public/assets/img/spaceship/hud.png";

const Spaceship = () => {
  return (
    <div id={styles.spaceship}>
      <img
        src={structure}
        alt="Structure of the front of the ship"
        className={styles.hud}
      />

      <img
        src={hud}
        alt="Hud of the front of the ship"
        className={styles.hud}
      />
    </div>
  );
};

export default Spaceship;
