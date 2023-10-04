import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MaterialSymbolsButton.css';
import { Link } from "react-router-dom";

const MaterialSymbolsButton = ({
    text,
    scale,
    onClickHandler,
}) => {
    return (
        <button
            className="material-symbols-rounded"
            style={{
                textAlign: "center",
                textDecoration: "none",
                fontSize: `${scale}rem`,
            }}
            onClick={onClickHandler}
        >{text}
        </button>
    )
};

MaterialSymbolsButton.propTypes = {
    text: PropTypes.string,
    scale: PropTypes.number,
    onClickHandler: PropTypes.func,
}

MaterialSymbolsButton.defaultProps = {
    text: "Button",
    scale: 1.0,
    onClickHandler: null,
}

export default MaterialSymbolsButton;