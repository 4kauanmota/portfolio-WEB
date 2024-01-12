import React, { CSSProperties, useRef, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Planet.module.scss";

type PlanetType = {
  width?: number | string;
  height?: number | string;
  planet: any;
  ring?: any;
  description?: string;
  colors?: string[];
  position?: object;
  rotation?: number;
  translation?: number;
  link?: string;
  style?: CSSProperties;
};

const Planet = ({
  width,
  height,
  planet,
  ring,
  description,
  colors,
  position,
  rotation,
  translation,
  link,
  style,
}: PlanetType) => {
  const [isHovered, setIsHovered] = useState(false);
  const [planetTitle, planetDescription] = description.split("-");
  const planetCaption = useRef(null);

  const captionPosition = (event: React.MouseEvent<HTMLDivElement>) => {
    const captionPosition = planetCaption.current;

    const spaceAbove = event.currentTarget.getBoundingClientRect().top;
    const spaceBelow =
      window.innerHeight - spaceAbove - event.currentTarget.clientHeight;

    if (spaceAbove < spaceBelow) {
      captionPosition.style.top = "auto";
      captionPosition.style.bottom = "-25%";
    } else {
      captionPosition.style.top = "-25%";
      captionPosition.style.bottom = "auto";
    }
  };

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
      };

  return (
    <Link
      to={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure
        style={{
          width: width,
          height: height,
          ...position,
          ...translationAnimationStyles,
        }}
        className={styles.planet}
        id={link}
        onMouseOver={captionPosition}
      >
        <img
          src={planet}
          alt={description}
          style={{
            ...{
              animation: `${styles.rotationAnim} ${
                rotation ?? 0
              }s linear infinite`,
            },
            ...style,
          }}
        />
        {ring ? (
          <img src={ring} alt={description} className={styles.ring} />
        ) : null}
        {link ? (
          <figcaption ref={planetCaption}>
            <span
              className={styles.title}
              style={{ color: colors ? colors[0] : null }}
            >
              {planetTitle}
            </span>
            <span
              className={styles.description}
              style={{ color: colors ? colors[1] : null }}
            >
              {planetDescription}
            </span>
          </figcaption>
        ) : null}
      </figure>
    </Link>
  );
};

export default Planet;
