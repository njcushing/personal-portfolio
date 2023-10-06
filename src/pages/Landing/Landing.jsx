import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './Landing.module.css';

import Navigation from '@/features/Navigation';
import PersonalInformation from '@/features/PersonalInformation';

const Landing = () => {
    return (
        <BrowserRouter>
            <div className={styles["landing-page-content"]}>
                <div className={styles["navigation-content"]}>
                    <div className={styles["page-titles"]}>
                        <h1 className={styles["name"]}>Niall Cushing</h1>
                        <h3 className={styles["personal-portfolio-text"]}>Personal Portfolio</h3>
                    </div>
                    <div className={styles["navigation-buttons"]}><Navigation /></div>
                </div>
                <PersonalInformation />
            </div>
        </BrowserRouter>
    )
};

export default Landing;