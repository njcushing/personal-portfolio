import PropTypes from 'prop-types';

import {
    allTechnologies,
    getTechnologyInformation
} from '../../utils/technologiesInformation';

const DeviconSVG = ({
    technologyID,
    scale,
    colour,
}) => {
    const iconInformation = getTechnologyInformation(technologyID);

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
                aria-labelledby="title"
            >{iconInformation.svg}
            <desc>{iconInformation.name}</desc>
            </svg>
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