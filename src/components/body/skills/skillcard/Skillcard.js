import React from "react";
import styles from "./Skillcard.module.scss";

const SkillCard = ({ skill }) => {
    return (
        <div className={styles.skillcard}>
            <div className={styles.skillIcon}>{skill.icon}</div>
            <div className={styles.skillName}>{skill.name}</div>
        </div>
    );
};

export default SkillCard;
