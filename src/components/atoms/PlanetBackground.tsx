import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./PlanetBackground.module.scss";
import useTravelStore from "../../store/TravelStore";
import Planet from "./Planet";

type PlanetBackgroundType = { children: any; planet: string; rotation: number };

const PlanetBackground = ({
  children,
  planet,
  rotation,
}: PlanetBackgroundType) => {
  const { setTravel } = useTravelStore();
  const [travelState, setTravelState] = useState(true);

  useEffect(() => {
    setTravel();

    setTimeout(() => {
      setTravel();
      setTravelState(false);
    }, 1000);
  }, []);

  return (
    <>
      {!travelState && (
        <>
          {children}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={styles.planet}
          >
            <Planet
              planet={require(`../../../public/assets/img/planets/high/${planet}+.png`)}
              position={{ left: 0 }}
              rotation={rotation}
            />
          </motion.div>
        </>
      )}
    </>
  );
};

export default PlanetBackground;
