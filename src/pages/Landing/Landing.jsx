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
                <Navigation />
                <PersonalInformation />
            </div>
        </BrowserRouter>
    )
};

export default Landing;