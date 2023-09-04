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
    <a href={link}>
      <figure
        style={{ maxWidth: width, maxHeight: height, ...position }}
        className={styles.planet}
      >
        <img src={planet} alt={description} />
      </figure>
    </a>
  );
}

export default Planet;
