import PropTypes from 'prop-types';
import styles from './TechnologiesPanel.module.css';

import {
    allTechnologies,
    getTechnologyInformation,
} from '@/utils/technologiesInformation';

import DeviconSVG from '@/components/DeviconSVG/DeviconSVG';

const TechnologiesPanel = ({
    technologyID,
}) => {
    const iconInformation = getTechnologyInformation(technologyID);

    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <DeviconSVG technologyID={technologyID} scale={1.5} colour="white" />
            <h4 className={styles["technology-name"]}>{iconInformation.name}</h4>
        </div>
        </div>
    );
};

TechnologiesPanel.propTypes = {
    technologyID: PropTypes.oneOf(allTechnologies()).isRequired,
};

export default TechnologiesPanel;