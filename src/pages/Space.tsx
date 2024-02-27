import React from "react";
import { motion } from "framer-motion";
import { MouseParallax } from "react-just-parallax";

import styles from "./Space.module.scss";

import SpaceBackground from "../components/molecules/SpaceBackground";
import Planet from "../components/atoms/Planet";

import sun from "../../public/assets/img/planets/sun.png";
import venus from "../../public/assets/img/planets/venus.png";
import earth from "../../public/assets/img/planets/earth.png";
import mars from "../../public/assets/img/planets/mars.png";
import saturn from "../../public/assets/img/planets/saturn.png";
import saturn_ring from "../../public/assets/img/planets/saturn_ring.png";
import neptune from "../../public/assets/img/planets/neptune.png";

const Space = () => {
  return (
    <>
      <motion.div
        id={styles.space}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        <SpaceBackground />

        <MouseParallax
          enableOnTouchDevice
          isAbsolutelyPositioned
          strength={0.03}
        >
          <span className="hideIfVertical">
            <Planet // Sun
              height={"103%"}
              planet={sun}
              description="Sun"
              position={{ left: "-45%", right: "92%" }}
              rotation={300} // 648
              imageStyle={{
                borderRadius: "60%",
                boxShadow:
                  "0 0 30px 10px #FFC546, 0 0 60px 10px orange, 0 0 80px 10px red, inset 0 0 30px 10px #FFC546",
                pointerEvents: "none",
              }}
            />
          </span>

          <MouseParallax
            enableOnTouchDevice
            isAbsolutelyPositioned
            strength={0.06}
          >
            <Planet // Venus
              width={"12.5%"}
              planet={venus}
              description="Contact - Venus"
              colors={["yellow", "orange"]}
              position={{ left: "11%" }}
              rotation={100} // 5.832
              translation={15} // 13.3
              link="contact"
            />

            <Planet // Earth
              width={"13%"}
              planet={earth}
              description="About me - Earth"
              colors={["#3391b8", "#3cb05d"]}
              position={{ left: "25.1%" }}
              rotation={21.6} // 21.6
              translation={20} // 20
              link="aboutMe"
            />

            <Planet // Mars
              width={"12%"}
              planet={mars}
              description="Career - Mars"
              colors={["red", "red"]}
              position={{ left: "39.5%" }}
              rotation={28.8} // 28.8
              translation={37.6} // 37.6
              link="career"
            />

            <Planet // Saturn
              width={"14%"}
              planet={saturn}
              description="Stacks - Saturn"
              colors={["orange", "yellow"]}
              position={{ left: "55.9%" }}
              rotation={10.8} // 10.8
              translation={60} // 580
              link="stacks"
              ring={saturn_ring}
            />

            <Planet // Neptune
              width={"13.5%"}
              planet={neptune}
              description="Projects - Neptune"
              colors={["blue", "purple"]}
              position={{ left: "74.5%" }}
              rotation={16.08} // 16.08
              translation={120} // 3.280
              link="projects"
            />
          </MouseParallax>
        </MouseParallax>
      </motion.div>
    </>
  );
};

export default Space;
