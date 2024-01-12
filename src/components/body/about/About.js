import React from "react";
import { useSelector } from "react-redux";
import SocialContact from "../../common/socialContact/SocialContact";
import styles from "./About.module.scss";

const LinkedInBadge = () => {
  const theme = useSelector((state) => state.ui.theme);

  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="small"
      data-theme={theme === "dark" ? "dark" : "light"}
      data-type="HORIZONTAL"
      data-vanity="harieshwar-ja"
      data-version="v1"
    >
      <a
        className="badge-base__link LI-simple-link"
        href="https://ca.linkedin.com/in/harieshwar-ja?trk=profile-badge"
      >
        {" "}
      </a>
    </div>
  );
};

const About = () => {
  const theme = useSelector((state) => state.ui.theme);

  return (
    <div className={styles.about}>
      <div className={styles.aboutTop}>
        <div className={styles.aboutInfo}>
          Hello there, I'm
          <br /> <span className={styles.name}>Harieshwar.</span>
          <br />
          <br />I love experimenting with the web.
        </div>
        <div className={styles.aboutPhoto}>
          <LinkedInBadge theme={theme} />
        </div>
      </div>
      <div className={styles.aboutBottom}>
        <SocialContact />
      </div>
    </div>
  );
};

export default About;
