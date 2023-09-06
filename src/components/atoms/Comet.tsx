import React from "react";

import styles from "./Comet.module.scss";

type CometType = {
  id: number;
};

const Comet = ({ id }: CometType) => {
  const randomTime = Math.trunc(Math.random() * 1000000 + 1);
  const randomSide = Math.floor(Math.random() * 2);

  setTimeout(() => {
    const comet = document.getElementById(`comet${id}`);

    if (comet) {
      if (randomSide) comet.classList.add(styles.cometAnimationRight);
      else comet.classList.add(styles.cometAnimationLeft);
    }
  }, randomTime);

  const randomTop = Math.trunc(Math.random() * 100 + 1);

  return (
    <i
      id={`comet${id}`}
      className={styles.comet}
      style={{ top: `${randomTop}%` }}
    ></i>
  );
};

export default Comet;
