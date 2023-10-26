import React from 'react'
import SocialContact from '../../common/socialContact/SocialContact'
import styles from './About.module.scss'

const About = () => {
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
          <img
            src={require('../../../assets/Programmer-bro.svg').default}
            alt='Harieshwar J A'
          ></img>
        </div>
      </div>
      <div className={styles.aboutBottom}>
        <SocialContact />
      </div>
    </div>
  )
}

export default About
