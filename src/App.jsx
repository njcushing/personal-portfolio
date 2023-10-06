import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './App.module.css';

import Landing from '@/pages/Landing/Landing';

const App = () => {
    return (
        <div className={styles["landing-page-container"]}>
            <Landing />
        </div>
    )
};

export default App;