import React from "react";
import Separator from "../../common/separator/Separator";
import { SkillsData } from "../../data/skills";
import Skillcard from "./skillcard/Skillcard";
import styles from "./Skills.module.scss";
const Skills = () => {
  const data = SkillsData;
  return (
    <div className={styles.skills}>
      <Separator />
      <label className={"sectionTitle"}>Skills</label>
      <div className={styles.skillsContainer}>
        {data.map((item, index) => (
          <div key={index} className={styles.skillsSection}>
            <label className={styles.skillsSectionTitle}>{item.type}</label>
            <div className={styles.skillsList}>
              {item.skills.map((skill, index) => (
                <Skillcard key={index} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
