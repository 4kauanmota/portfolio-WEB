import React from "react";

import styles from "./Star.module.scss";

type StarType = {
  id: number;
};

const Star = ({ id }: StarType) => {
  const randomTime = Math.trunc(Math.random() * 50000 + 1);

  setInterval(() => {
    const star = document.getElementById(`star${id}`);

    star.classList.add(styles.starAnimation);

    setTimeout(() => {
      star.classList.remove(styles.starAnimation);
    }, 5000);
  }, randomTime);

  const randomTop = Math.trunc(Math.random() * 100 + 1);
  const randomRight = Math.trunc(Math.random() * 100 + 1);

  return (
    <i
      id={`star${id}`}
      className={styles.star}
      style={{
        top: `${randomTop}%`,
        right: `${randomRight}%`,
      }}
    ></i>
  );
};

export default Star;
