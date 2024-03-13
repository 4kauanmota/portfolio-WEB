import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import styles from "./AboutMe.module.scss";
import Planet from "../../components/atoms/Planet";
import PlanetBackground from "../../components/atoms/PlanetBackground";
import { getCuriosities } from "../../api/curiosities";
import info from "../../../public/animations/info.json";

const AboutMe = () => {
  const iconPlay = useRef(null);
  const [icon, setIcon] = useState(info as any);

  const [curiosities, setCuriosities] = useState(null);
  const [actualCuriosity, setActualCuriosity] = useState({
    type: null,
    image: null,
    text: null,
  });

  useEffect(() => {
    const loadCuriosities = async () => {
      setCuriosities(await getCuriosities());
    };
    loadCuriosities();

    const iconInterval = setInterval(() => {
      iconPlay?.current?.stop();
      iconPlay?.current?.play();
    }, 4000);

    return () => {
      clearInterval(iconInterval);
    };
  }, []);

  const newCuriosity = () => {
    if (curiosities) {
      const random = Math.abs(
        Math.round(Math.random() * curiosities.length - 1)
      );
      setActualCuriosity(curiosities[random]);
    }
  };

  return (
    <PlanetBackground planet="earth" rotation={21.6}>
      <section id={styles.earth}>
        <header>
          <span className={styles.introduction}>
            <img src={require("../../../public/assets/img/perfil.jpg")} />
            <h1>About Me</h1>
          </span>
        </header>

        <main className={styles.presentation}>
          <p>
            I am a technology enthusiast with a background in Analysis and
            Development of Systems, on the verge of graduating at the age of 20.
            I bring 7 months of experience as a Front-End Developer, where I
            honed my skills in coding, focusing on creating and refactoring code
            to make websites more responsive and dynamic.
          </p>

          <p>
            In my internship as a Mobile Developer, I specialized in React
            Native and AWS, actively participating in agile meetings following
            the Scrum framework. I consistently sought to broaden my knowledge,
            working on simple projects during my studies and tackling more
            complex endeavors in dedicated sprints. This experience not only
            enhanced my technical skills but also refined my communication and
            teamwork abilities.
          </p>

          <p>
            I hold the AWS Certified Cloud Practitioner certification,
            validating my expertise in cloud solutions.
          </p>
        </main>

        <footer>
          <button className={styles.curiosities} onClick={() => newCuriosity()}>
            <span className={styles.icon}>
              <img
                src={
                  actualCuriosity.image ?? "https://i.imgur.com/QbJfwAG.jpeg"
                }
              />

              <Lottie
                lottieRef={iconPlay}
                animationData={icon}
                loop={false}
                autoplay={false}
              />
            </span>

            <div className={styles.curiosity}>
              <h2>{actualCuriosity.type ?? "Curiosity"}</h2>
              <p>
                {actualCuriosity.text ??
                  "Click here to see a curiosity about me"}
              </p>
            </div>
          </button>
        </footer>
      </section>
    </PlanetBackground>
  );
};

export default AboutMe;
