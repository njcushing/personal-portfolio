import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

import ImageBasic from '@/components/ImageBasic/ImageBasic';

const PersonalInformation = () => {
    return (
        <>
            <h2 className={styles["name"]}>Niall Cushing</h2>
            <div className={styles["about-me-container"]}>
                <h3 className={styles["about-me-title"]}>About Me</h3>
                <h4 className={styles["about-me-text"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    gravida lorem magna. Praesent ut tincidunt lectus. Cras ut
                    fermentum orci. Nulla auctor dui eros, vitae imperdiet justo
                    dictum ut. Fusce blandit risus et elit convallis, id finibus
                    nulla porta. Integer tempor nisl et purus aliquam, eu
                    faucibus urna sagittis. Etiam.
                </h4>
            </div>
        </>
    )
};

export default PersonalInformation;