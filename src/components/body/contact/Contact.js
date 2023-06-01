import React from "react";
import Separator from "../../common/separator/Separator";
import SocialContact from "../../common/socialContact/SocialContact";
import styles from "./Contact.module.scss";

const Contact = () => {
    // const resumeFileRef = require("../../../assets/files/Harieshwar J A - Resume.pdf");
    return (
        <div className={styles.contact}>
            <Separator />
            <label className={"sectionTitle"}>Contact</label>
            <div className={styles.contactContainer}>
                <div className={styles.contactLeft}>
                    <p>
                        Want to get in touch? Contact me on any of the platform
                    </p>
                    <SocialContact />
                </div>
                {/* <div className={styles.contactRight}>
                    <a
                        href={resumeFileRef}
                        download={"Harieshwar J A - Resume.pdf"}>
                        <i className='fi-rr-cloud-download download-icon' />
                        Download Resume
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default Contact;
