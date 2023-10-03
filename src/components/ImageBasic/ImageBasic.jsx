import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageBasic.module.css';

const ImageBasic = ({
    url,
    alt,
}) => {
    const [image, setImage] = useState("");

    useEffect(() => {
        try {
            new URL(url);
        } catch (error) {
            setImage("");
            return;
        }
        setImage(url);
    }, [url]);

    return (
        <img className={styles["Image"]} src={image} alt={alt}></img>
    );
}

ImageBasic.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default ImageBasic;