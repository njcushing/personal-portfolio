import styles from './index.module.css'

import NavigationButton from './components/NavigationButton/NavigationButton';

const Navigation = () => {
    return (
        <nav className={styles["container"]}>
            <ul className={styles["nav-buttons-list"]}>
                <li className={styles["nav-button"]}><NavigationButton
                    text="About Me"
                    onClickHandler={() => {}}
                /></li>
                <li className={styles["nav-button"]}><NavigationButton
                    text="My Projects"
                /></li>
            </ul>
        </nav>
    );
};

export default Navigation;