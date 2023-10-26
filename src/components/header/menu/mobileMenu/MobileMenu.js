import React from "react";
import styles from "./MobileMenu.module.scss";
import { useSelector } from "react-redux";

// Function Imports
import { onSectionMenuClick } from "../../../../utils/utils";

const MobileMenu = ({ toggleMenuOpen }) => {
  const theme = useSelector((state) => state.ui.theme);

  const onMenuItemClick = (e) => {
    toggleMenuOpen(e);
    onSectionMenuClick(e);
  }

  return (
    <div
      className={
        theme === "dark" ? `${styles.menu} ${styles.darkMenu}` : styles.menu
      }
    >
      <div className={styles.closeIcon} onClick={toggleMenuOpen}>
        <i className="fi-rr-cross-circle"></i>
      </div>
      <div className={styles.mobileOptions}>
        <div onClick={onMenuItemClick} className={styles.mobileOption}>
            <i className={"fi-rr-edit-alt " + styles.optionIcon}>Projects</i>
        </div>
        <div onClick={onMenuItemClick} className={styles.mobileOption}>
            <i className={"fi-rr-laptop " + styles.optionIcon}>Skills</i>
        </div>
        <div onClick={onMenuItemClick} className={styles.mobileOption}>
            <i className={"fi-rr-briefcase " + styles.optionIcon}>Work</i>
        </div>
        <div onClick={onMenuItemClick} className={styles.mobileOption}>
            <i className={"fi-rr-user " + styles.optionIcon}>Contact</i>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
