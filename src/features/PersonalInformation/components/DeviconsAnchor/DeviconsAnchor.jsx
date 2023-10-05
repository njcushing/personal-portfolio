import PropTypes from 'prop-types';
import styles from './DeviconsAnchor.module.css';

const DeviconsAnchor = ({
    href,
    ariaLabel,
    src,
    alt,
    sizeRem,
}) => {
    return (
        <a
            className={styles["DeviconsAnchor"]}
            style={{
                width: `${sizeRem}rem`,
                height: `${sizeRem}rem`,
            }}
            href={href}
            aria-label={ariaLabel}
        >
            <img
                className={styles["devicon"]}
                src={src}
                alt={alt}
                style={{
                    width: `${sizeRem * 0.8}rem`,
                }}
            />
        </a>
    )
};

DeviconsAnchor.propTypes = {
    href: PropTypes.string,
    ariaLabel: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    sizeRem: PropTypes.number,
}

DeviconsAnchor.defaultProps = {
    href: "",
    ariaLabel: "",
    sizeRem: 1.0,
}

export default DeviconsAnchor;