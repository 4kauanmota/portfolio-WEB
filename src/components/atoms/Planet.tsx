import { CSSProperties, useRef, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Planet.module.scss";

type PlanetType = {
  width?: number | string;
  height?: number | string;
  link?: string;
  planet: string;
  ring?: string;
  position?: CSSProperties;
  rotation?: number;
  translation?: number;
  colors?: string[];
  description?: string;
  style?: CSSProperties;
  imageStyle?: CSSProperties;
};

const Planet = ({
  width,
  height,
  link,
  planet,
  ring,
  position,
  rotation = 0,
  translation = 0,
  colors,
  description = " - ",
  style,
  imageStyle,
}: PlanetType) => {
  const [isHovered, setIsHovered] = useState(false);

  const [planetTitle, planetDescription] = description.split("-");

  const planetCaption = useRef(null);
  const captionPosition = (event: React.MouseEvent<HTMLDivElement>) => {
    const captionPosition = planetCaption.current;

    if (captionPosition) {
      const element = event.currentTarget;
      const spaceAbove = element.getBoundingClientRect().top;
      const spaceBelow = window.innerHeight - spaceAbove - element.clientHeight;
      const spaceLeft = element.getBoundingClientRect().left;
      const spaceRight = window.innerWidth - spaceLeft - element.clientWidth;

      if (spaceLeft + spaceRight > spaceAbove + spaceBelow) {
        if (spaceAbove < spaceBelow) {
          captionPosition.style.top = "auto";
          captionPosition.style.bottom = "-70px";
        } else {
          captionPosition.style.top = "-70px";
          captionPosition.style.bottom = "auto";
        }
      }
    }
  };

  const translationAnimationStyles = {
    animation: `${styles.translationAnim} ${
      translation ?? 0
    }s linear infinite ${isHovered ? "paused" : ""}`,
  };

  return (
    <Link
      to={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...style,
      }}
    >
      <figure
        style={{
          width: width,
          height: height,
          ...position,
          ...translationAnimationStyles,
        }}
        className={`${styles.planet} ${!link ? styles.unLink : null}`}
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
            ...imageStyle,
          }}
        />

        {ring ? (
          <img src={ring} alt={description} className={styles.ring} />
        ) : null}

        {link ? (
          <figcaption ref={planetCaption}>
            <span className={styles.title} style={{ color: colors[0] ?? null }}>
              {planetTitle}
            </span>

            <span
              className={styles.description}
              style={{ color: colors[1] ?? null }}
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
