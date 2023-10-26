import React from "react";
import { useSelector } from "react-redux";
import styles from "./WebMenu.module.scss";

// Function Imports
import { onSectionMenuClick } from "../../../../utils/utils";

const WebMenu = () => {
  const theme = useSelector((state) => state.ui.theme);

  return (
    <div
      className={styles.menu + (theme === "dark" ? " " + styles.darkMenu : "")}
    >
      <div onClick={onSectionMenuClick} className={styles.webOption}>
        <i className={"fi-rr-edit-alt " + styles.optionIcon}>Projects</i>
      </div>
      <div onClick={onSectionMenuClick} className={styles.webOption}>
        <i className={"fi-rr-laptop " + styles.optionIcon}>Skills</i>
      </div>
      <div onClick={onSectionMenuClick} className={styles.webOption}>
        <i className={"fi-rr-briefcase " + styles.optionIcon}>Work</i>
      </div>
      <div onClick={onSectionMenuClick} className={styles.webOption}>
        <i className={"fi-rr-user " + styles.optionIcon}>Contact</i>
      </div>
    </div>
  );
};

export default WebMenu;
