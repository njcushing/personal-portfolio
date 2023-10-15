import PropTypes from 'prop-types';
import './MaterialSymbolsIcon.css';

const MaterialSymbolsIcon = ({
    ariaLabel,
    text,
    color,
    sizeRem,
}) => {
    return (
        <div
            className="MaterialSymbolsIcon material-symbols-rounded"
            style={{
                color: color,
                fontSize: `${sizeRem * 0.8}rem`,
            }}
            aria-label={ariaLabel}
        >{text}</div>
    );
};

MaterialSymbolsIcon.propTypes = {
    ariaLabel: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.string,
    sizeRem: PropTypes.number,
}

MaterialSymbolsIcon.defaultProps = {
    ariaLabel: "",
    text: "Button",
    color: "rgba(0, 0, 0, 1.0)",
    sizeRem: 1.0,
}

export default MaterialSymbolsIcon;