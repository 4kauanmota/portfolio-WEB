import React from "react";
import StarSky from "react-star-sky";
import Starfield from "react-starfield";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./Pages.module.scss";
import useTravelStore from "./store/TravelStore";
import Space from "./pages/Space";
import Contact from "./pages/planets/Contact";
import Projects from "./pages/planets/Projects";
import Stacks from "./pages/planets/Stacks";
import AboutMe from "./pages/planets/AboutMe";
import Career from "./pages/planets/Career";
import Error404 from "./pages/Error404";
import Spaceship from "./components/atoms/Spaceship";

const Pages = () => {
  const { travel, setTravel } = useTravelStore();

  return (
    <Router>
      <Spaceship />

      {travel ? (
        <span className={styles.travel}>
          <Starfield
            starCount={1000}
            starColor={[255, 255, 255]}
            speedFactor={1.8}
          />
        </span>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <StarSky
            frameRate={30}
            debugFPS={false}
            style={{ width: "100vw", height: "100vh", position: "absolute" }}
          />
        </motion.div>
      )}

      <Routes>
        <Route path="/">
          <Route index={true} element={<Space />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aboutMe" element={<AboutMe />} />
          <Route path="career" element={<Career />} />
          <Route path="stacks" element={<Stacks />} />
          <Route path="projects" element={<Projects />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};
export default Pages;
