import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Work from "./work/Work";
// import {updatePageRoute} from '../../utils/utils.js';
import styles from "./Body.module.scss";

const Body = () => {
    // const isElementInView = (elementId) => {

    // }


    // useEffect(() => console.log(window.scrollY, window.scrollY + window.innerHeight));
    return (
        <div className={styles.body}>
            <section id='about' className={styles.about}>
                <About />
            </section>
            <section id='projects' className={styles.projects}>
                <Projects />
            </section>
            <section id='skills' className={styles.skills}>
                <Skills />
            </section>
            <section id='work' className={styles.work}>
                <Work />
            </section>
            <section id='contact' className={styles.contact}>
                <Contact />
            </section>
        </div>
    );
};

export default Body;
