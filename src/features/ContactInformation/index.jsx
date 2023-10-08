import styles from './index.module.css';

import DeviconsAnchor from '@/components/DeviconsAnchor/DeviconsAnchor';

const ContactInformation = () => {
    return (
        <div className={styles["wrapper"]}>
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
                    <ul className={styles["contact-me-additional"]}>
                        <li>
                            <h4 className={styles["contact-me-additional-item-heading"]}>
                                Email:
                            </h4>
                            <p className={styles["contact-me-additional-item-text"]}>
                                fakeemail@gmail.com
                            </p>
                        </li>
                        <li>
                            <h4 className={styles["contact-me-additional-item-heading"]}>
                                Phone:
                            </h4>
                            <p className={styles["contact-me-additional-item-text"]}>
                                +44 9999 999999
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default ContactInformation;