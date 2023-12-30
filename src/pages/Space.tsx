import React from "react";
import { MouseParallax } from "react-just-parallax";

import styles from "./Space.module.scss";
import Planet from "../components/atoms/Planet";
import Background from "../components/molecule/Background";

const Space = () => {
  return (
    <div id={styles.space}>
      <Background />

      <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.03}>
        <div className="hideOnPhone">
          <Planet // Sun
            height={"103%"}
            planet="https://cdn.pixabay.com/photo/2020/06/09/08/16/sun-5277493_1280.png"
            description="Sun"
            position={{ top: 0, left: "-40%" }}
            rotation={300} // 648
          />
        </div>

        <MouseParallax
          enableOnTouchDevice
          isAbsolutelyPositioned
          strength={0.06}
        >
          <Planet // Venus
            width={210}
            planet="https://cdn-icons-png.flaticon.com/512/6989/6989415.png"
            description="Venus - Contact"
            colors={["yellow", "orange"]}
            position={{ left: "15%", bottom: "50%" }}
            rotation={100} // 5.832
            translation={15} // 13.3
            link="contact"
          />

          <Planet // Earth
            width={220}
            planet="https://cdn-icons-png.flaticon.com/512/3594/3594282.png"
            description="Earth - About me"
            colors={["blue", "green"]}
            position={{ left: "28.5%" }}
            rotation={21.6} // 21.6
            translation={20} // 20
            link="aboutMe"
          />

          <Planet // Mars
            width={180}
            planet="https://cdn.pixabay.com/photo/2016/04/01/08/43/cartoon-1298905_1280.png"
            description="Mars - Career"
            colors={["red", "red"]}
            position={{ left: "43%" }}
            rotation={28.8} // 28.8
            translation={37.6} // 37.6
            link="career"
          />

          <Planet // Saturn
            width={280}
            planet="https://static-00.iconduck.com/assets.00/saturn-icon-512x512-ootn1mno.png"
            description="Saturn - Stacks"
            colors={["orange", "yellow"]}
            position={{ left: "56.5%" }}
            rotation={10.8} // 10.8
            translation={60} // 580
            link="stacks"
          />

          <Planet // Neptune
            width={265}
            planet="https://static.vecteezy.com/system/resources/previews/018/887/916/original/cartoon-neptune-icon-png.png"
            description="Neptune - Projects"
            colors={["blue", "purple"]}
            position={{ left: "75%" }}
            rotation={16.08} // 16.08
            translation={120} // 3.280
            link="projects"
          />
        </MouseParallax>
      </MouseParallax>
    </div>
  );
};

export default Space;
