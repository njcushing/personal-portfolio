import styles from './index.module.css';

import photo from '@/assets/NiallCushingPhoto.jpg';
import MaterialSymbolsButton from './components/MaterialSymbolsButton/MaterialSymbolsButton';

const materialSymbolsStyle = {
    color: 'black',
    fontSize: '2rem',

}

const PersonalInformation = () => {
    return (
        <div className={styles["container"]}>
            <img
                className={styles["photo"]}
                src={photo}
                alt="Me in front of the Prague skyline"
            ></img>
            <h2 className={styles["name"]}>Niall Cushing</h2>
            <div className={styles["about-me-container"]}>
                <h3 className={styles["about-me-title"]}>About Me</h3>
                <p className={styles["about-me-text"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    gravida lorem magna. Praesent ut tincidunt lectus. Cras ut
                    fermentum orci. Nulla auctor dui eros, vitae imperdiet justo
                    dictum ut. Fusce blandit risus et elit convallis, id finibus
                    nulla porta. Integer tempor nisl et purus aliquam, eu
                    faucibus urna sagittis. Etiam.
                </p>
            </div>
            <div className={styles["contact-me-container"]}>
                <h3 className={styles["contact-me-title"]}>Contact Me</h3>
                <ul className={styles["contact-me-options"]}>
                    <li className={styles["contact-me-button"]}>
                        <img
                            className={styles["linked-in-icon"]}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                            aria-label="linked-in"
                        />
                    </li>
                    <li className={styles["contact-me-button"]}>
                        <img
                            className={styles["github-icon"]}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            aria-label="github"
                        />
                    </li>
                    <li className={styles["contact-me-button"]}><MaterialSymbolsButton text="email" link="/"/></li>
                </ul>
            </div>
        </div>
    )
};

export default PersonalInformation;