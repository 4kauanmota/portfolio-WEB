import styles from "./Planet.module.scss";

type PlanetType = {
  size: number;
  planet: string;
  description: string;
  position: object;
  link: string;
};

function Planet({ size, planet, description, position, link }: PlanetType) {
  return (
    <a href={link}>
      <figure
        style={{ width: size, height: size, ...position }}
        className={styles.planet}
      >
        <img src={planet} alt={description} />
      </figure>
    </a>
  );
}

export default Planet;
