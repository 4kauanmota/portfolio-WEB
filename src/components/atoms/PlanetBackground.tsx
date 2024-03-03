import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./PlanetBackground.module.scss";
import useTravelStore from "../../store/TravelStore";

type PlanetBackgroundType = { children: any };

const PlanetBackground = ({ children }: PlanetBackgroundType) => {
  const { travel, setTravel } = useTravelStore();

  useEffect(() => {
    setTravel();

    setTimeout(() => {
      setTravel();
    }, 1000);
  }, []);

  return (
    <>
      {!travel ? (
        <span className={styles.planetBackground}>{children}</span>
      ) : null}
    </>
  );
};

export default PlanetBackground;
