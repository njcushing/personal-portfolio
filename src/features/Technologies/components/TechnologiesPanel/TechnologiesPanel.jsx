import PropTypes from 'prop-types';
import styles from './TechnologiesPanel.module.css';

import {
    allTechnologies,
    getTechnologyDeviconInformation,
} from '../../utils/TechnologiesListProps';

const TechnologiesPanel = ({
    technologyID,
}) => {
    const iconScale = 1;
    const iconInformation = getTechnologyDeviconInformation(technologyID);

    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <svg width={48} height={48} viewBox="0 0 128 128">{iconInformation.svg}</svg>
            <h4 className={styles["technology"]}>{iconInformation.name}</h4>
        </div>
        </div>
    );
};

TechnologiesPanel.propTypes = {
    technologyID: PropTypes.oneOf(allTechnologies()).isRequired,
};

export default TechnologiesPanel;