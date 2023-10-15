import PropTypes from 'prop-types';
import styles from './TechnologyNameBox.module.css';

import {
    allTechnologies,
    getTechnologyInformation,
} from '@/utils/technologiesInformation/technologiesInformation';

const TechnologyNameBox = ({
    technologyID,
}) => {
    const technologyInformation = getTechnologyInformation(technologyID);

    return (
        <div
            className={styles["container"]}
            style={{
                backgroundColor: technologyInformation.baseColour,
            }}
        >
            <h5 className={styles["technology-name"]}>{technologyInformation.name}</h5>
        </div>
    );
};

TechnologyNameBox.propTypes = {
    technologyID: PropTypes.oneOf(allTechnologies()).isRequired,
};

export default TechnologyNameBox;