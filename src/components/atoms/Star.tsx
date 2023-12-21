import React from "react";

import styles from "./Star.module.scss";

type StarType = {
  id: number;
};

export const randomSize = Math.floor(Math.random() * (1 - 4 + 1));

const Star = ({ id }: StarType) => {
  const randomSize = Math.trunc(Math.random() * 4 + 1);
  const randomTime = Math.trunc(Math.random() * 50000 + 1);
  const randomTop = Math.trunc(Math.random() * 100 + 1);
  const randomRight = Math.trunc(Math.random() * 100 + 1);

  setInterval(() => {
    const star = document.getElementById(`star${id}`);

    if (star) {
      star.classList.add(styles.starAnimation);

      star.style.width = `${randomSize}px`;
      star.style.height = `${randomSize}px`;
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
    ></i>
  );
};

export default Star;
