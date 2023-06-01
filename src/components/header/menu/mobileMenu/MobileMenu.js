import React from "react";
import styles from "./MobileMenu.module.scss";
import { useSelector } from "react-redux";

const MobileMenu = ({ toggleMenuOpen }) => {
  const theme = useSelector((state) => state.ui.theme);
  console.log("Theme in Mobile menu is: ", theme);
  return (
    <div
      className={
        theme === "dark" ? `${styles.menu} ${styles.darkMenu}` : styles.menu
      }
      // className={styles.menu}
    >
      <div className={styles.closeIcon} onClick={toggleMenuOpen}>
        <i className="fi-rr-cross-circle"></i>
      </div>
      <div className={styles.mobileOptions}>
        <div className={styles.mobileOption}>
          <a href="#projects" onClick={toggleMenuOpen}>
            <i className={"fi-rr-edit-alt " + styles.optionIcon}></i>
            Projects
          </a>
        </div>
        <div className={styles.mobileOption}>
          <a href="#skills" onClick={toggleMenuOpen}>
            <i className={"fi-rr-laptop " + styles.optionIcon}></i>
            Skills
          </a>
        </div>
        <div className={styles.mobileOption}>
          <a href="#work" onClick={toggleMenuOpen}>
            <i className={"fi-rr-briefcase " + styles.optionIcon}></i>
            Work
          </a>
        </div>
        <div className={styles.mobileOption}>
          <a href="#contact" onClick={toggleMenuOpen}>
            <i className={"fi-rr-user " + styles.optionIcon}></i>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
