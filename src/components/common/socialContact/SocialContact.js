import React from "react";

import { SocialData } from "../../data/social.js";

import styles from "./SocialContact.module.scss";

const SocialContact = () => {
  return (
    <div className={styles.socialContact}>
      {SocialData.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noreferrer">
          <img src={item.icon} alt={item.platform}></img>
        </a>
      ))}
    </div>
  );
};

export default SocialContact;
