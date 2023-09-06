import React, { useState } from "react";

import styles from "./Background.module.scss";
import Star from "../atoms/Star";
import Comet from "../atoms/Comet";

const Background = () => {
  const [a, ab] = useState(true);

  const stars = [];
  const comets = [];

  const randomQuantity = Math.trunc(Math.random() * 20 + 31);
  for (let i = 0; i < 30 + randomQuantity; i++) {
    stars.push(<Star id={i} />);
    comets.push(<Comet id={i} />);
  }

  if (a) {
    return (
      <>
        <div>
          {stars.map((star) => star)}
          {comets.map((comet) => comet)}
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Background;
