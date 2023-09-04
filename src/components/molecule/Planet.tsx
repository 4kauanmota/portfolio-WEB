import { Link } from "react-router-dom";
import styles from "./Planet.module.scss";

type PlanetType = {
  width?: number | string;
  height?: number | string;
  planet: string;
  description: string;
  position: object;
  link: string;
};

function Planet({
  width,
  height,
  planet,
  description,
  position,
  link,
}: PlanetType) {
  return (
    <Link to={link}>
      <figure
        style={{ maxWidth: width, maxHeight: height, ...position }}
        className={styles.planet}
      >
        <img src={planet} alt={description} />
      </figure>
    </Link>
  );
}

export default Planet;
