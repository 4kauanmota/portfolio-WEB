import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import styles from "./AboutMe.module.scss";
import Planet from "../../components/atoms/Planet";

import { getCuriosities } from "../../api/curiosities";
import info from "../../../public/animations/info.json";
import infoLoop from "../../../public/animations/info-loop.json";
import perfil from "../../../public/assets/img/perfil.jpg";
import earth from "../../../public/assets/img/planets/earth.png";
import PlanetBackground from "../../components/atoms/PlanetBackground";

const AboutMe = () => {
  const iconRef = useRef(null);
  const [icon, setIcon] = useState(info as any);

  const [curiosities, setCuriosities] = useState(null);
  const [actualCuriosity, setActualCuriosity] = useState({
    type: "",
    text: "",
  });

  const loadDetails = () => {
    if (curiosities) {
      newCuriosity();

      if (actualCuriosity.type === "curiosity") {
        setIcon(info);
        setTimeout(() => {
          setIcon(infoLoop);
        }, 1000);
      }
    }

    if (iconRef.current) {
      iconRef.current.play();
    }
  };

  useEffect(() => {
    const loadCuriosities = async () => {
      setCuriosities(await getCuriosities());
    };
    loadCuriosities();

    loadDetails();

    const iconInterval = setInterval(() => {
      if (iconRef.current) {
        iconRef.current.play();

        setTimeout(() => {
          iconRef.current.stop();
        }, 2000);
      }
    }, 5000);

    return () => {
      clearInterval(iconInterval);
    };
  }, []);

  useEffect(() => {
    loadDetails();
  }, [actualCuriosity, curiosities]);

  const newCuriosity = () => {
    const random = Math.round(Math.random() * 1);

    setActualCuriosity(curiosities[random]);
  };

  return (
    <PlanetBackground>
      <section id={styles.earth}>
        <header>
          <span className={styles.title}>
            <img src={perfil} />
            <h1>About Me</h1>
          </span>
        </header>

        <main>
          <article className={styles.presentation}>
            <p>
              I am a technology enthusiast with a background in Analysis and
              Development of Systems, on the verge of graduating at the age of
              20. I bring 7 months of experience as a Front-End Developer, where
              I honed my skills in coding, focusing on creating and refactoring
              code to make websites more responsive and dynamic.
            </p>

            <p>
              In my internship as a Mobile Developer, I specialized in React
              Native and AWS, actively participating in agile meetings following
              the Scrum framework. I consistently sought to broaden my
              knowledge, working on simple projects during my studies and
              tackling more complex endeavors in dedicated sprints. This
              experience not only enhanced my technical skills but also refined
              my communication and teamwork abilities.
            </p>

            <p>
              I hold the AWS Certified Cloud Practitioner certification,
              validating my expertise in cloud solutions.
            </p>
          </article>

          <article className={styles.details}>
            <button
              className={styles.curiosities}
              onClick={() => newCuriosity()}
            >
              <span className={styles.icon}>
                <Lottie
                  lottieRef={iconRef}
                  animationData={icon}
                  loop={false}
                  autoplay={false}
                  style={{ width: 200, height: 200 }}
                />
              </span>

              <div className={styles.curiosity}>
                <h3>{actualCuriosity.type}</h3>
                <p>{actualCuriosity.text}</p>
              </div>
            </button>
          </article>
        </main>

        <footer>
          <Planet // Earth
            width={"120%"}
            planet={earth}
            description="About me - Earth"
            position={{ left: "-10%" }}
            rotation={21.6} // 21.6
            translation={0} // 20
            style={{
              width: "100%",
              height: "100%",
              display: "inline-block",
              position: "relative",
            }}
          />
        </footer>
      </section>
    </PlanetBackground>
  );
};

export default AboutMe;
