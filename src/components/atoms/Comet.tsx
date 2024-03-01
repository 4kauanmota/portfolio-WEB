import React, { useEffect } from "react";

import styles from "./Comet.module.scss";

type CometType = {
  id: number;
};

const Comet = ({ id }: CometType) => {
  useEffect(() => {
    const randomTime = Math.trunc(Math.random() * 1000000 + 1);
    const randomSide = Math.floor(Math.random() * 2);
    const randomRotate = Math.trunc(Math.random() * 10 + 1);

    const cometTimeout = setTimeout(() => {
      const comet = document.getElementById(`comet${id}`);

      if (comet) {
        if (randomSide) comet.classList.add(styles.cometAnimationRight);
        else comet.classList.add(styles.cometAnimationLeft);

        comet.parentElement.style.transform = `rotate(${randomRotate}deg)`;
      }

      setTimeout(() => {
        if (comet) {
          comet.remove();
        }
      }, 12000);
    }, randomTime);

    return () => {
      clearTimeout(cometTimeout);
    };
  }, []);

  const randomTop = Math.trunc(Math.random() * 100 + 1);

  return (
    <div
      className={styles.cometArea}
      style={{
        top: `${randomTop}%`,
      }}
    >
      <i id={`comet${id}`} className={styles.comet} />
    </div>
  );
};

export default Comet;
