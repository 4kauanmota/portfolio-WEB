import React from "react";
import { MouseParallax } from "react-just-parallax";

import styles from "./Space.module.scss";
import Planet from "../components/atoms/Planet";
import Background from "../components/molecules/Background";

import spaceship from "../../public/assets/img/spaceship.png";
import hud from "../../public/assets/img/hud.png";
import sun from "../../public/assets/img/sun.png";
import venus from "../../public/assets/img/venus.png";
import earth from "../../public/assets/img/earth.png";
import mars from "../../public/assets/img/mars.png";
import saturn from "../../public/assets/img/saturn.png";
import saturn_ring from "../../public/assets/img/saturn_ring.png";
import neptune from "../../public/assets/img/neptune.png";

const Space = () => {
  return (
    <>
      <div id={styles.spaceship}>
        <img
          src={spaceship}
          alt="Structure of the front of the ship"
          className={styles.hud}
        />
        <img
          src={hud}
          alt="Hud of the front of the ship"
          className={styles.hud}
        />
      </div>

      <div id={styles.space}>
        <Background />

        <MouseParallax
          enableOnTouchDevice
          isAbsolutelyPositioned
          strength={0.03}
        >
          <div className="hideOnPhone">
            <Planet // Sun
              height={"103%"}
              planet={sun}
              description="Sun"
              position={{ left: "-45%", right: "92%" }}
              rotation={300} // 648
              style={{
                borderRadius: "60%",
                boxShadow:
                  "0 0 30px 10px #FFC546, 0 0 60px 10px orange, 0 0 80px 10px red",
              }}
            />
          </div>

          <MouseParallax
            enableOnTouchDevice
            isAbsolutelyPositioned
            strength={0.06}
          >
            <Planet // Venus
              width={"12.5%"}
              planet={venus}
              description="Venus - Contact"
              colors={["yellow", "orange"]}
              position={{ left: "11%" }}
              rotation={100} // 5.832
              translation={15} // 13.3
              link="contact"
            />

            <Planet // Earth
              width={"13%"}
              planet={earth}
              description="Earth - About me"
              colors={["blue", "green"]}
              position={{ left: "25%" }}
              rotation={21.6} // 21.6
              translation={20} // 20
              link="aboutMe"
            />

            <Planet // Mars
              width={"12%"}
              planet={mars}
              description="Mars - Career"
              colors={["red", "red"]}
              position={{ left: "39.5%" }}
              rotation={28.8} // 28.8
              translation={37.6} // 37.6
              link="career"
            />

            <Planet // Saturn
              width={"14%"}
              planet={saturn}
              description="Saturn - Stacks"
              colors={["orange", "yellow"]}
              position={{ left: "56%" }}
              rotation={10.8} // 10.8
              translation={60} // 580
              link="stacks"
              ring={saturn_ring}
            />

            <Planet // Neptune
              width={"13.5%"}
              planet={neptune}
              description="Neptune - Projects"
              colors={["blue", "purple"]}
              position={{ left: "74.5%" }}
              rotation={16.08} // 16.08
              translation={120} // 3.280
              link="projects"
            />
          </MouseParallax>
        </MouseParallax>
      </div>
    </>
  );
};

export default Space;
