import React from "react";

import styles from "./Star.module.scss";

const Star = () => {
  const randomTime = Math.trunc(Math.random() * 50000 + 1);
  console.log(randomTime);

  setInterval(() => {
    const star = document.getElementById(styles.star);

    star.classList.add(styles.starAnimation);

    setTimeout(() => {
      star.classList.remove(styles.starAnimation);
    }, 5000);
  }, randomTime);

  return <i id={styles.star}></i>;
};

export default Star;
