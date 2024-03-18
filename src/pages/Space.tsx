import { MouseParallax } from "react-just-parallax";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Space.module.scss";

import Planet from "../components/atoms/Planet";

const Space = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          id={styles.space}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <MouseParallax
            enableOnTouchDevice
            isAbsolutelyPositioned
            strength={0.03}
          >
            <span className="hideIfVertical">
              <Planet // Sun
                height={"100%"}
                planet={require("../../public/assets/img/planets/low/sun.png")}
                description="Sun"
                position={{ left: "-45vw", right: "92vw" }}
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
                planet={require("../../public/assets/img/planets/low/venus.png")}
                description="Contact - Venus"
                colors={["yellow", "orange"]}
                position={{ left: "11%" }}
                rotation={100} // 5.832
                translation={15} // 13.3
                link="contact"
              />

              <Planet // Earth
                width={"13%"}
                planet={require("../../public/assets/img/planets/low/earth.png")}
                description="About me - Earth"
                colors={["#3391b8", "#3cb05d"]}
                position={{ left: "25.1%" }}
                rotation={21.6} // 21.6
                translation={20} // 20
                link="aboutMe"
              />

              <Planet // Mars
                width={"12%"}
                planet={require("../../public/assets/img/planets/low/mars.png")}
                description="Career - Mars"
                colors={["red", "red"]}
                position={{ left: "39.7%" }}
                rotation={28.8} // 28.8
                translation={37.6} // 37.6
                link="career"
              />

              <Planet // Saturn
                width={"14%"}
                planet={require("../../public/assets/img/planets/low/saturn.png")}
                description="Stacks - Saturn"
                colors={["orange", "yellow"]}
                position={{ left: "55.9%" }}
                rotation={10.8} // 10.8
                translation={60} // 580
                link="stacks"
                ring={require("../../public/assets/img/planets/low/saturn_ring.png")}
              />

              <Planet // Neptune
                width={"13.5%"}
                planet={require("../../public/assets/img/planets/low/neptune.png")}
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
      </AnimatePresence>
    </>
  );
};

export default Space;
