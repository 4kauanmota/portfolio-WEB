import React from "react";

import styles from "./Background.module.scss";
import Star from "../atoms/Star";

const Background = () => {
  const stars = [];
  const randomQuantityPlus = Math.trunc(Math.random() * 20 + 1);
  console.log(randomQuantityPlus);

  for (let i = 0; i < 30 + randomQuantityPlus; i++) stars.push(<Star id={i} />);

  return <>{stars.map((star) => star)}</>;
};

export default Background;
