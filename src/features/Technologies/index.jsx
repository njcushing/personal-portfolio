import { forwardRef } from 'react';
import styles from './index.module.css';

import TechnologiesList from './components/TechnologiesList/TechnologiesList';

const Technologies = forwardRef(function Projects(props, ref) {
    return (
        <div className={styles["wrapper"]} ref={ref}>
        <div className={styles["container"]}>
            <h2 className={styles["title"]}>Technologies</h2>
            <ul className={styles["categories-container"]}>
                <li><TechnologiesList categoryName="Languages" /></li>
                <li><TechnologiesList categoryName="Frontend" /></li>
                <li><TechnologiesList categoryName="Tools" /></li>
            </ul>
        </div>
        </div>
    );
});

export default Technologies;