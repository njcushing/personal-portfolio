import PropTypes from 'prop-types';
import styles from './TechnologyPanel.module.css';

import {
    allTechnologies,
    getTechnologyInformation,
} from '@/utils/technologiesInformation/technologiesInformation';

import DeviconSVG from '@/components/DeviconSVG/DeviconSVG';

const TechnologyPanel = ({
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

TechnologyPanel.propTypes = {
    technologyID: PropTypes.oneOf(allTechnologies()).isRequired,
};

export default TechnologyPanel;