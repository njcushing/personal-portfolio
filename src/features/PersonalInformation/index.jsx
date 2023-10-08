import styles from './index.module.css';

import photo from '@/assets/NiallCushingPhoto.jpg';
import DeviconsAnchor from '@/components/DeviconsAnchor/DeviconsAnchor';

const PersonalInformation = () => {
    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <img
                className={styles["photo"]}
                src={photo}
                alt="Me in front of the Prague skyline"
            ></img>
            <h2 className={styles["name"]}>Niall Cushing</h2>
            <ul className={styles["personal-page-links"]}>
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
            <div className={styles["about-me-container"]}>
                <h3 className={styles["about-me-title"]}>About Me</h3>
                <ul className={styles["about-me-paragraph-list"]}>
                    <li><p className={styles["about-me-paragraph"]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        gravida lorem magna. Praesent ut tincidunt lectus.
                    </p></li>
                    <li><p className={styles["about-me-paragraph"]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        gravida lorem magna. Praesent ut tincidunt lectus.
                    </p></li>
                    <li><p className={styles["about-me-paragraph"]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        gravida lorem magna. Praesent ut tincidunt lectus.
                    </p></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default PersonalInformation;