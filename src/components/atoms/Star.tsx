import React from "react";

import styles from "./Star.module.scss";

type StarType = {
  id: number;
};

const Star = ({ id }: StarType) => {
  const randomSize = Math.random() * 2 + 1;
  const randomTime = Math.trunc(Math.random() * 50000 + 1);
  const randomTop = Math.trunc(Math.random() * 90 + 1);
  const randomRight = Math.trunc(Math.random() * 95 + 1);

  setTimeout(() => {
    const star = document.getElementById(`star${id}`);

    if (star) {
      star.classList.add(styles.starAnimation);

      star.style.width = `${randomSize}px`;
      star.style.height = `${randomSize}px`;

      setTimeout(() => {
        star.classList.remove(styles.starAnimation);
      }, 5000);
    }
  }, randomTime);

  return (
    <i
      id={`star${id}`}
      className={styles.star}
      style={{
        top: `${randomTop}%`,
        right: `${randomRight}%`,
      }}
    />
  );
};

export default Star;
