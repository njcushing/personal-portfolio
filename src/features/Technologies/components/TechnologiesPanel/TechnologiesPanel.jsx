import PropTypes from 'prop-types';
import styles from './TechnologiesPanel.module.css';

const TechnologiesPanel = ({
    technologyID,
}) => {
    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <h4 className={styles["technology"]}>{technologyID}</h4>
        </div>
        </div>
    );
};

TechnologiesPanel.propTypes = {
    technologyID: PropTypes.oneOf([
        "html",
        "css",
        "javascript",
        "react",
        "git",
    ]).isRequired,
};

export default TechnologiesPanel;