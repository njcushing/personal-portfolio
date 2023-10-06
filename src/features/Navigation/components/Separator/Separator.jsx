import PropTypes from 'prop-types';
import styles from './Separator.module.css';

const Separator = ({
    width,
    height,
}) => {
    return (
        <div
            className={styles["Separator"]}
            style={{
                width: width,
                height: height,
            }}
        ></div>
    );
};

Separator.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
}

Separator.defaultProps = {
    width: "90%",
    height: "0.1rem",
}

export default Separator;