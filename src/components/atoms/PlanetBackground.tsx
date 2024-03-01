import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./PlanetBackground.module.scss";

type PlanetBackgroundType = { children: any };

const PlanetBackground = ({ children }: PlanetBackgroundType) => {
  const [travel, setTravel] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTravel(false);
    }, 2000);
  }, []);

  return travel ? (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 3 }}
    ></motion.div>
  ) : (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className={styles.planetBackground}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PlanetBackground;
