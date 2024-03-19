import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./AboutMe.module.scss";
import curiosities from "../../data/curiosities";
import PlanetBackground from "../../components/atoms/PlanetBackground";
import info from "../../../public/animations/info.json";

const AboutMe = () => {
  const iconPlay = useRef(null);

  const [actualCuriosity, setActualCuriosity] = useState({
    type: null,
    image: null,
    text: null,
  });

  useEffect(() => {
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
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src={require("../../../public/assets/img/perfil.jpg")}
            />

            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              About me
            </motion.h1>
          </span>
        </header>

        <main className={styles.presentation}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            I am a technology enthusiast with a background in Analysis and
            Development of Systems, on the verge of graduating at the age of 20.
            I bring 7 months of experience as a Front-End Developer, where I
            honed my skills in coding, focusing on creating and refactoring code
            to make websites more responsive and dynamic.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            In my internship as a Mobile Developer, I specialized in React
            Native and AWS, actively participating in agile meetings following
            the Scrum framework. I consistently sought to broaden my knowledge,
            working on simple projects during my studies and tackling more
            complex endeavors in dedicated sprints. This experience not only
            enhanced my technical skills but also refined my communication and
            teamwork abilities.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I hold the AWS Certified Cloud Practitioner certification,
            validating my expertise in cloud solutions.
          </motion.p>
        </main>

        <footer>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, type: "spring" }}
            viewport={{ once: true }}
            className={styles.curiosities}
            onClick={() => newCuriosity()}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className={styles.icon}
            >
              <img
                src={
                  actualCuriosity.image ?? "https://i.imgur.com/QbJfwAG.jpeg"
                }
              />

              <Lottie
                lottieRef={iconPlay}
                animationData={info}
                loop={false}
                autoplay={false}
              />
            </motion.span>

            <div className={styles.curiosity}>
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {actualCuriosity.type ?? "Curiosity"}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {actualCuriosity.text ??
                  "Click here to see a curiosity about me"}
              </motion.p>
            </div>
          </motion.button>
        </footer>
      </section>
    </PlanetBackground>
  );
};

export default AboutMe;
