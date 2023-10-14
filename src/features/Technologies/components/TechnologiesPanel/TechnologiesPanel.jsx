import PropTypes from 'prop-types';
import styles from './TechnologiesPanel.module.css';

import {
    allTechnologies,
    getTechnologyDeviconInformation,
} from '../../utils/TechnologiesListProps';

import DeviconSVG from '../DeviconSVG/DeviconSVG';

const TechnologiesPanel = ({
    technologyID,
}) => {
    const iconInformation = getTechnologyDeviconInformation(technologyID);

    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <DeviconSVG technologyID={technologyID} />
            <h4 className={styles["technology"]}>{iconInformation.name}</h4>
        </div>
        </div>
    );
};

TechnologiesPanel.propTypes = {
    technologyID: PropTypes.oneOf(allTechnologies()).isRequired,
};

export default TechnologiesPanel;