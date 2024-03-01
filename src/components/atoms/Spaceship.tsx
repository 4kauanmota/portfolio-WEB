import React from "react";

import styles from "./Spaceship.module.scss";

const Spaceship = () => {
  return (
    <span className="hideIfVertical">
      <div id={styles.spaceship}>
        <img
          src={require("../../../public/assets/img/spaceship/structure.png")}
          alt="Structure of the front of the ship"
          className={styles.hud}
        />

        <img
          src={require("../../../public/assets/img/spaceship/hud.png")}
          alt="Hud of the front of the ship"
          className={styles.hud}
        />
      </div>
    </span>
  );
};

export default Spaceship;
