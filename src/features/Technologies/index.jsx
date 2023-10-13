import { forwardRef } from 'react';
import styles from './index.module.css';

const Technologies = forwardRef(function Projects(props, ref) {
    return (
        <div className={styles["wrapper"]} ref={ref}>
        <div className={styles["container"]}>
            <h2 className={styles["title"]}>Technologies</h2>
        </div>
        </div>
    );
});

export default Technologies;