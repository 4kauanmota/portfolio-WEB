import React, { useEffect, useState } from "react";

import styles from "./Projects.module.scss";
import { getRepos } from "../../api/github";

const Projects = () => {
  const [repos, setRepos] = useState();

  useEffect(() => {
    const asyncRepos = async () => {
      const allRepos: any = await getRepos();
      setRepos(allRepos);
    };

    asyncRepos();
  }, []);

  console.log(repos);
  return (
    <section id={styles.neptune}>
      <div>Projects</div>
    </section>
  );
};

export default Projects;
