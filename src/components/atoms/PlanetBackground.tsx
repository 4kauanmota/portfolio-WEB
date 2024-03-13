import { useEffect } from "react";

import styles from "./PlanetBackground.module.scss";
import useTravelStore from "../../store/TravelStore";
import Planet from "./Planet";

type PlanetBackgroundType = { children: any; planet: string; rotation: number };

const PlanetBackground = ({
  children,
  planet,
  rotation,
}: PlanetBackgroundType) => {
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
        <>
          <span className={styles.planetBackground}>{children}</span>

          <div className={styles.planet}>
            <Planet
              planet={require(`../../../public/assets/img/planets/${planet}.png`)}
              position={{ left: 0 }}
              rotation={rotation}
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default PlanetBackground;
