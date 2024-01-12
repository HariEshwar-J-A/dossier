import React from "react";
import styles from "./ProjectCard.module.scss";
const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectInfo}>
        <label className={styles.projectTitle}>{project.title}</label>
        <div className={styles.projectLinks}>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              <div className={styles.linkButton}>
                <i className="fi-rr-globe"></i>
                Demo
              </div>
            </a>
          )}
          {project.repository && (
            <a href={project.repository}  target="_blank" rel="noreferrer">
              <div className={styles.linkButton}>
                <i className="devicon-github-original coloured"></i>
                Repo
              </div>
            </a>
          )}
        </div>
        <p className={styles.projectAbout}>{project.about}</p>
        <div className={styles.projectTags}>
          {project.tags.map((tag, index) => (
            <label key={index} className={styles.projectTag}>
              {tag}
            </label>
          ))}
        </div>
      </div>
      <img
        src={project.image}
        className={styles.projectImage}
        alt="project"
        loading="eager"
      ></img>
    </div>
  );
};

export default ProjectCard;
