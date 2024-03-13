import { MouseParallax } from "react-just-parallax";

import styles from "./Background.module.scss";
import { ReactNebula } from "@flodlc/nebula";
import Starfield from "react-starfield";
import useTravelStore from "../../store/TravelStore";

const Background = () => {
  const { travel } = useTravelStore();

  return (
    <>
      <div className={styles.container}>
        <MouseParallax
          strength={0.01}
          enableOnTouchDevice
          isAbsolutelyPositioned
        >
          {travel ? (
            <>
              <span className={styles.travel}>
                <ReactNebula
                  config={{
                    starsCount: 0,
                    nebulasIntensity: 8,
                    cometFrequence: 0,
                    starsRotationSpeed: 0,
                    sunScale: 0,
                    planetsScale: 0,
                    solarSystemOrbite: 0,
                    solarSystemSpeedOrbit: 0,
                  }}
                />

                <Starfield
                  starCount={1000}
                  starColor={[255, 255, 255]}
                  speedFactor={1.8}
                />
              </span>
            </>
          ) : (
            <span className={styles.stars}>
              <ReactNebula
                config={{
                  starsCount: 250,
                  nebulasIntensity: 8,
                  cometFrequence: 50,
                  starsRotationSpeed: 0,
                  sunScale: 0,
                  planetsScale: 0,
                  solarSystemOrbite: 0,
                  solarSystemSpeedOrbit: 0,
                }}
              />
            </span>
          )}
        </MouseParallax>
      </div>
    </>
  );
};

export default Background;
