import React from "react";
import styles from "./Workcard.module.scss";

const Workcard = ({ work, companyData }) => {
  return (
    <div className={styles.workcard}>
      <div className={styles.workInfo}>
        <div className={styles.aboutWork}>
        <a href={companyData[work.company].website} target="_blank" rel="noopener noreferrer">
          <img className={styles.workLogo} src={companyData[work.company].logo} alt="logo" />
        </a>
          <div>
            <label className={styles.companyName}>{work.company}</label>
            <div className={styles.workDates}>
              <label>{work.startDate} </label>to
              <label> {work.endDate}</label>
            </div>
          </div>
        </div>
        <p className={styles.workDescription} title={work.description.general}>
          {work.description.general}
        </p>
        <ul>
          {work.description.learningsOrAchievements.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Workcard;
