import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Planet.module.scss";

type PlanetType = {
  width?: number | string;
  height?: number | string;
  planet: string;
  description: string;
  position?: object;
  rotation?: number;
  translation?: number;
  link: string;
};

const Planet = ({
  width,
  height,
  planet,
  description,
  position,
  rotation,
  translation,
  link,
}: PlanetType) => {
  const [isHovered, setIsHovered] = useState(false);

  const translationAnimationStyles = isHovered
    ? {
        animation: `${styles.translationAnim} ${
          translation ?? 0
        }s ease-in-out infinite`,
        animationPlayState: "paused",
      }
    : {
        animation: `${styles.translationAnim} ${
          translation ?? 0
        }s ease-in-out infinite`,
        animationPlayState: "running",
      };

  return (
    <Link
      to={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure
        style={{
          maxWidth: width,
          height: height,
          ...position,
          ...translationAnimationStyles,
        }}
        className={styles.planet}
        id={link}
      >
        <img
          src={planet}
          alt={description}
          style={{
            animation: `${styles.rotationAnim} ${
              rotation ?? 0
            }s linear infinite`,
            animationPlayState: "running",
          }}
        />
        <figcaption>{description}</figcaption>
      </figure>
    </Link>
  );
};

export default Planet;
