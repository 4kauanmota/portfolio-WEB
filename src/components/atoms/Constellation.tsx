import React from "react";

import styles from "./Constellation.module.scss";

const Constellation = () => {
  return (
    <section className={styles.constellation}>
      <div className={styles.k}>
        <div className={styles.k1}></div>
        <div className={styles.k2}></div>
        <div className={styles.k3}></div>
        <div className={styles.k4}></div>
      </div>
    </section>
  );
};

export default Constellation;
