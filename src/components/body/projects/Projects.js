import React from "react";
import Separator from "../../common/separator/Separator";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./projectCard/ProjectCard";
import styles from "./Projects.module.scss";

const Projects = () => {
  const data = ProjectData;
  return (
    <div className={styles.projects}>
      <Separator />
      <label className={"sectionTitle"}>Projects</label>
      <div>
        {data.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
