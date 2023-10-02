import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Landing.module.css';

import PersonalInformation from '@/features/PersonalInformation';

const Landing = () => {
    return (
        <>
            <PersonalInformation />
        </>
    )
};

export default Landing;