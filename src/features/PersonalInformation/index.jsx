import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const PersonalInformation = () => {
    return (
        <>
            <h2 className={styles["name"]}>Niall Cushing</h2>
            <h4 className={styles["about-me"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                gravida lorem magna. Praesent ut tincidunt lectus. Cras ut
                fermentum orci. Nulla auctor dui eros, vitae imperdiet justo
                dictum ut. Fusce blandit risus et elit convallis, id finibus
                nulla porta. Integer tempor nisl et purus aliquam, eu faucibus
                urna sagittis. Etiam.
            </h4>
        </>
    )
};

export default PersonalInformation;