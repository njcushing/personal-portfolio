import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './NavigationButton.module.css';

const NavigationButton = ({
    text,
    onClickHandler,
    enabled,
    selected,
    link,
}) => {
    return (
        <div className={styles["wrapper"]}>
            <Link
                to={link}
                className={styles["NavigationButton"]}
                style={{
                    textAlign: "center",
                    textDecoration: "none",
                }}
                onClick={onClickHandler}
                disabled={!enabled}
                sel={`${selected ? "true" : "false"}`}
            >{text}
            </Link>
        </div>
    )
};

NavigationButton.propTypes = {
    text: PropTypes.string,
    width: PropTypes.string,
    onClickHandler: PropTypes.func,
    enabled: PropTypes.bool,
    selected: PropTypes.bool,
    link: PropTypes.string,
}

NavigationButton.defaultProps = {
    text: "Button",
    width: "auto",
    onClickHandler: null,
    enabled: true,
    selected: false,
    link: "",
}

export default NavigationButton;