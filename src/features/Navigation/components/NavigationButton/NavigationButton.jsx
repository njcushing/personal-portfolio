import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './NavigationButton.module.css';

const NavigationButton = ({
    text,
    onClickHandler,
    link,
}) => {
    return (
        <div className={styles["wrapper"]}>
            <Link
                to={link}
                className={styles["NavigationButton"]}
                onClick={(e) => {
                    onClickHandler(e);
                    e.target.blur();
                    e.preventDefault();
                }}
            >{text}
            </Link>
        </div>
    )
};

NavigationButton.propTypes = {
    text: PropTypes.string,
    onClickHandler: PropTypes.func,
    link: PropTypes.string,
}

NavigationButton.defaultProps = {
    text: "Button",
    onClickHandler: null,
    link: "",
}

export default NavigationButton;