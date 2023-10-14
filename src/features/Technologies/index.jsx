import { forwardRef } from 'react';
import styles from './index.module.css';

import TechnologiesList from './components/TechnologiesList/TechnologiesList';

const Technologies = forwardRef(function Projects(props, ref) {
    return (
        <div className={styles["wrapper"]} ref={ref}>
        <div className={styles["container"]}>
            <h2 className={styles["title"]}>Technologies</h2>
            <ul className={styles["categories-container"]}>
                <li><TechnologiesList
                    category="languages"
                    technologies={["html", "css", "javascript"]}
                /></li>
                <li><TechnologiesList
                    category="frontend"
                    technologies={["react"]}
                /></li>
                <li><TechnologiesList
                    category="tools"
                    technologies={["git"]}
                /></li>
            </ul>
        </div>
        </div>
    );
});

export default Technologies;