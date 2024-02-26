import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

import styles from "./AboutMe.module.scss";

import { getCuriosities } from "../../api/curiosities";

import perfil from "../../../public/assets/img/perfil.jpg";
import info from "../../../public/animations/info.json";
import infoLoop from "../../../public/animations/info-loop.json";

const AboutMe = () => {
  const iconRef = useRef(null);

  const [icon, setIcon] = useState(info as any);
  const [curiosities, setCuriosities] = useState(null);
  const [actualCuriosity, setActualCuriosity] = useState({
    type: "",
    text: "",
  });

  useEffect(() => {
    const loadCuriosities = async () => {
      setCuriosities(await getCuriosities());
    };
    loadCuriosities();

    loadDetails();
  }, []);

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

    iconRef.current.play();
  };

  useEffect(() => {
    loadDetails();
  }, [actualCuriosity, curiosities]);

  setInterval(() => {
    iconRef.current.play();

    setTimeout(() => {
      iconRef.current.stop();
    }, 2000);
  }, 5000);

  const newCuriosity = () => {
    const random = Math.round(Math.random() * 1);

    setActualCuriosity(curiosities[random]);
  };

  return (
    <section id={styles.earth}>
      <div className={styles.title}>
        <span className={styles.titleContainer}>
          <img src={perfil} />
          <h1>About Me</h1>
        </span>
      </div>

      <article className={styles.presentation}>
        <p>
          I am a technology enthusiast with a background in Analysis and
          Development of Systems, on the verge of graduating at the age of 20. I
          bring 7 months of experience as a Front-End Developer, where I honed
          my skills in coding, focusing on creating and refactoring code to make
          websites more responsive and dynamic.
        </p>

        <p>
          In my internship as a Mobile Developer, I specialized in React Native
          and AWS, actively participating in agile meetings following the Scrum
          framework. I consistently sought to broaden my knowledge, working on
          simple projects during my studies and tackling more complex endeavors
          in dedicated sprints. This experience not only enhanced my technical
          skills but also refined my communication and teamwork abilities.
        </p>

        <p>
          I hold the AWS Certified Cloud Practitioner certification, validating
          my expertise in cloud solutions.
        </p>
      </article>

      <article className={styles.details}>
        <button className={styles.curiosities} onClick={() => newCuriosity()}>
          <span>
            <Lottie
              lottieRef={iconRef}
              animationData={icon}
              loop={false}
              autoplay={false}
              style={{ width: 200, height: 200 }}
            />
          </span>

          <div>
            <h3>{actualCuriosity.type}</h3>
            <p>{actualCuriosity.text}</p>
          </div>
        </button>
      </article>
    </section>
  );
};

export default AboutMe;
