import PropTypes from 'prop-types';

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
        <div
            style={{
                width: `${scale * 24}px`,
                height: `${scale * 24}px`,
            }}
        >
            <svg
                width={scale * 24}
                height={scale * 24}
                fill={colour}
                viewBox="0 0 128 128"
            >{iconInformation.svg}</svg>
        </div>
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