import { useEffect, forwardRef } from 'react';
import styles from './index.module.css';

import DeviconsAnchor from '@/components/DeviconsAnchor/DeviconsAnchor';
import animateInViewport from '@/utils/animateInViewport/animateInViewport';

const ContactInformation = forwardRef(function ContactInformation(props, ref) {
    useEffect(() => {
        const eventListener = animateInViewport(ref.current);
        window.addEventListener("scroll", eventListener);
        return () => window.removeEventListener("scroll", eventListener);
    }, [ref]);

    const contactInfo = (
        /*
        <ul className={styles["contact-me-additional"]}>
            <li>
                <h4 className={styles["contact-me-additional-item-heading"]}>
                    Email:
                </h4>
                <p className={styles["contact-me-additional-item-text"]}>
                    xxxxx@gmail.com
                </p>
            </li>
        </ul>
        */
        null
    )

    return (
        <div className={styles["wrapper"]} ref={ref}>
        <nav className={styles["container"]}>
            <div className={styles["contact-me-container"]}>
                <h3 className={styles["contact-me-title"]}>Contact Me</h3>
                <div className={styles["contact-information-container"]}>
                    <ul className={styles["contact-me-links"]}>
                        <li><DeviconsAnchor
                            href="https://uk.linkedin.com/in/niall-cushing-19b8ab17a"
                            ariaLabel="linked in"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                            alt="linked in"
                            sizeRem={2.4}
                        /></li>
                        <li><DeviconsAnchor
                            href="https://github.com/njcushing"
                            ariaLabel="github"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="github"
                            sizeRem={2.4}
                        /></li>
                    </ul>
                    {contactInfo}
                </div>
            </div>
        </nav>
        </div>
    );
});

export default ContactInformation;