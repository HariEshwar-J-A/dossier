import React from "react";
import { useSelector } from "react-redux";
import styles from "./WebMenu.module.scss";

const WebMenu = () => {
  const theme = useSelector((state) => state.ui.theme);

  return (
    <div
      className={styles.menu + (theme === "dark" ? " " + styles.darkMenu : "")}
    >
      <div className={styles.webOption}>
        <a href="#project">
          <i className={"fi-rr-edit-alt " + styles.optionIcon}></i>
          Projects
        </a>
      </div>
      <div className={styles.webOption}>
        <a href="#skills">
          <i className={"fi-rr-laptop " + styles.optionIcon}></i>
          Skills
        </a>
      </div>
      <div className={styles.webOption}>
        <a href="#work">
          <i className={"fi-rr-briefcase " + styles.optionIcon}></i>
          Work
        </a>
      </div>
      <div className={styles.webOption}>
        <a href="#contact">
          <i className={"fi-rr-user " + styles.optionIcon}></i>
          Contact
        </a>
      </div>
    </div>
  );
};

export default WebMenu;
