import PropTypes from 'prop-types';
import styles from './index.module.css'

import NavigationButton from './components/NavigationButton/NavigationButton';
import Separator from './components/Separator/Separator';

const Navigation = ({
    personalInformationOnClickHandler,
    projectsOnClickHandler,
    technologiesOnClickHandler,
    contactInformationOnClickHandler,
}) => {
    return (
        <div className={styles["wrapper"]}>
        <nav className={styles["container"]}>
            <ul className={styles["nav-buttons-list"]}>
                <li className={styles["nav-button"]}><NavigationButton
                    text="About Me"
                    onClickHandler={personalInformationOnClickHandler}
                /></li>
                <Separator height="1px" />
                <li className={styles["nav-button"]}><NavigationButton
                    text="My Projects"
                    onClickHandler={projectsOnClickHandler}
                /></li>
                <Separator height="1px" />
                <li className={styles["nav-button"]}><NavigationButton
                    text="Technologies"
                    onClickHandler={technologiesOnClickHandler}
                /></li>
                <Separator height="1px" />
                <li className={styles["nav-button"]}><NavigationButton
                    text="Contact Me"
                    onClickHandler={contactInformationOnClickHandler}
                /></li>
            </ul>
        </nav>
        </div>
    );
};

Navigation.propTypes = {
    personalInformationOnClickHandler: PropTypes.func,
    projectsOnClickHandler: PropTypes.func,
    technologiesOnClickHandler: PropTypes.func,
    contactInformationOnClickHandler: PropTypes.func,
}

Navigation.defaultProps = {
    personalInformationOnClickHandler: null,
    projectsOnClickHandler: null,
    technologiesOnClickHandler: null,
    contactInformationOnClickHandler: null,
}

export default Navigation;