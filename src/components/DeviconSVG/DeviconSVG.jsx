import PropTypes from 'prop-types';
import styles from './DeviconSVG.module.css';

import {
    allTechnologies,
    getTechnologyDeviconInformation
} from '../../features/Technologies/utils/TechnologiesListProps';

const DeviconSVG = ({
    technologyID,
    scale,
    colour,
}) => {
    const iconInformation = getTechnologyDeviconInformation(technologyID);

    return (
        <svg
            width={scale * 24}
            height={scale * 24}
            viewBox="0 0 128 128"
            fill={colour}
        >{iconInformation.svg}</svg>
    )
}

DeviconSVG.propTypes = {
    technologyID: PropTypes.oneOf(allTechnologies()).isRequired,
    scale: PropTypes.number,
    colour: PropTypes.string,
};

DeviconSVG.defaultProps = {
    scale: 1,
    colour: "white",
}

export default DeviconSVG;