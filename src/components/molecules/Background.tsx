import { MouseParallax } from "react-just-parallax";
import { WindowSizeStarField } from "starfield-react";
import { ReactNebula } from "@flodlc/nebula";

import styles from "./Background.module.scss";
import useTravelStore from "../../store/TravelStore";
import { useState } from "react";

const ExampleProps = {
  count: 939,
  speed: 2.8,
  starRatio: 81,
  starSize: 2,
  randomColor: true,
  starStyle: "#fff",
  starShape: "round",
  clear: true,
  bgStyle: "#000",
  noBackground: false,
};

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
                <WindowSizeStarField
                  count={1000}
                  fps={60}
                  starSize={0.8}
                  starRatio={80}
                  speed={12}
                  starShape={"round"}
                  noBackground={true}
                  style={{ zIndex: "1" }}
                />
              </span>

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
