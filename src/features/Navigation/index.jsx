import styles from './index.module.css'

import NavigationButton from './components/NavigationButton/NavigationButton';
import Separator from './components/Separator/Separator';

const Navigation = () => {
    return (
        <div className={styles["wrapper"]}>
        <nav className={styles["container"]}>
            <ul className={styles["nav-buttons-list"]}>
                <li className={styles["nav-button"]}><NavigationButton
                    text="About Me"
                    onClickHandler={() => {}}
                /></li>
                <Separator height="1px" />
                <li className={styles["nav-button"]}><NavigationButton
                    text="My Projects"
                    onClickHandler={() => {}}
                /></li>
                <Separator height="1px" />
                <li className={styles["nav-button"]}><NavigationButton
                    text="Contact Me"
                    onClickHandler={() => {}}
                /></li>
            </ul>
        </nav>
        </div>
    );
};

export default Navigation;