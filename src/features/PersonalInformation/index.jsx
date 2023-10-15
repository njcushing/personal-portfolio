import { useEffect, forwardRef } from 'react';
import styles from './index.module.css';

import photo from '@/assets/NiallCushingPhoto.jpg';
import DeviconsAnchor from '@/components/DeviconsAnchor/DeviconsAnchor';
import animateInViewport from '@/utils/animateInViewport/animateInViewport';

const PersonalInformation = forwardRef(function PersonalInformation(props, ref) {
    useEffect(() => {
        const eventListener = animateInViewport(ref.current);
        window.addEventListener("scroll", eventListener);
        return () => window.removeEventListener("scroll", eventListener);
    }, [ref]);

    const e = (
        <div className={styles["wrapper"]} ref={ref}>
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
                        To whoever may be reading this: hello! I'm Niall, a
                        university graduate from the United Kingdom with an
                        interest in full-stack development. I have a passion for
                        creating responsive, elegant, accessible applications.
                    </p></li>
                    <li><p className={styles["about-me-paragraph"]}>
                        Although I have been writing code for many years as a
                        hobby, I have since decided to pursue that hobby as a
                        career.
                    </p></li>
                    <li><p className={styles["about-me-paragraph"]}>
                        Since early 2023 I have been working through The
                        Odin Project; an online course that has allowed me to
                        develop a deep understanding of many web-based
                        technologies and other industry-standard tools, such
                        as HTML, CSS, JavaScript and the React framework; all of
                        which I am using today.
                    </p></li>
                </ul>
            </div>
        </div>
        </div>
    );

    return e;
});

export default PersonalInformation;