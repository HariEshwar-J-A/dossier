import React, { useState } from "react";
import MobileMenu from "./menu/mobileMenu/MobileMenu";
import WebMenu from "./menu/webMenu/WebMenu";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const theme = useSelector((state) => state.ui.theme);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuOpen = (e) => setIsOpen((prevState) => !prevState);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>Harieshwar J A</div>
      <div
        className={
          styles.menu + (theme === "dark" ? " " + styles.darkMenu : "")
        }
      >
        <div className={styles.webMenu}>
          <WebMenu />
        </div>
        <div className={styles.mobileMenu}>
          <i
            className={
              "fi-rr-apps " +
              styles.menuIcon +
              (theme === "dark" ? " " + styles.darkMenuIcon : "")
            }
            onClick={toggleMenuOpen}
          ></i>
          {isOpen && <MobileMenu toggleMenuOpen={toggleMenuOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
