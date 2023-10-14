import PropTypes from 'prop-types';
import styles from './TechnologiesPanel.module.css';

import { allTechnologies } from '../../utils/TechnologiesListProps';

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
    technologyID: PropTypes.oneOf(allTechnologies()).isRequired,
};

export default TechnologiesPanel;