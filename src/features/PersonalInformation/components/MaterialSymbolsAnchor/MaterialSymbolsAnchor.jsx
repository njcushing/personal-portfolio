import PropTypes from 'prop-types';
import './MaterialSymbolsAnchor.css';

const MaterialSymbolsAnchor = ({
    href,
    ariaLabel,
    text,
    sizeRem,
}) => {
    return (
        <a
            className="MaterialSymbolsAnchor"
            style={{
                width: `${sizeRem}rem`,
                height: `${sizeRem}rem`,
            }}
            href={href}
            aria-label={ariaLabel}
        >
            <div
                className="material-symbols-rounded"
                style={{
                    textAlign: "center",
                    textDecoration: "none",
                    fontSize: `${sizeRem * 0.8}rem`,
                }}
            >{text}</div>
        </a>
    )
};

MaterialSymbolsAnchor.propTypes = {
    href: PropTypes.string,
    ariaLabel: PropTypes.string,
    text: PropTypes.string,
    sizeRem: PropTypes.number,
}

MaterialSymbolsAnchor.defaultProps = {
    href: "",
    ariaLabel: "",
    text: "Button",
    sizeRem: 1.0,
}

export default MaterialSymbolsAnchor;