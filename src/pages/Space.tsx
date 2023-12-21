import React from "react";
import { MouseParallax } from "react-just-parallax";

import styles from "./Space.module.scss";
import Planet from "../components/atoms/Planet";
import Background from "../components/molecule/Background";

const Space = () => {
  return (
    <>
      <section id={styles.space}>
        <Background />

        <MouseParallax
          enableOnTouchDevice
          isAbsolutelyPositioned
          strength={0.03}
        >
          <div className="hide">
            <Planet // Sun
              height={"100%"}
              planet="https://cdn.pixabay.com/photo/2020/06/09/08/16/sun-5277493_1280.png"
              description="Sun"
              position={{ top: 0, left: "-40%" }}
              link=""
            />
          </div>

          <MouseParallax
            enableOnTouchDevice
            isAbsolutelyPositioned
            strength={0.1}
          >
            <Planet // Venus
              width={200}
              planet="https://cdn-icons-png.flaticon.com/512/6989/6989415.png"
              description="Venus"
              position={{ left: "25%" }}
              link="contact"
            />

            <Planet // Earth
              width={200}
              planet="https://cdn-icons-png.flaticon.com/512/3594/3594282.png"
              description="About me"
              position={{ left: "35%", bottom: "20%" }}
              link="aboutMe"
            />

            <Planet // Mars
              width={200}
              planet="https://cdn.pixabay.com/photo/2016/04/01/08/43/cartoon-1298905_1280.png"
              description="Career"
              position={{ left: "50%", bottom: "50%" }}
              link="career"
            />

            <Planet // Saturn
              width={200}
              planet="https://png.pngtree.com/png-clipart/20230326/original/pngtree-saturn-planet-vector-png-image_9004529.png"
              description="Stacks"
              position={{ left: "70%", top: "20%" }}
              link="stacks"
            />

            <Planet // Neptune
              width={200}
              planet="https://static.vecteezy.com/system/resources/previews/018/887/916/original/cartoon-neptune-icon-png.png"
              description="Projects"
              position={{ left: "85%", bottom: "20%" }}
              link="projects"
            />
          </MouseParallax>
        </MouseParallax>
      </section>
    </>
  );
};

export default Space;
