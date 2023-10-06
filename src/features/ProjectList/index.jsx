import styles from './index.module.css';

import ProjectPanel from './components/ProjectPanel/ProjectPanel';

const ProjectList = () => {
    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <h2 className={styles["title"]}>My Projects</h2>
            <h3 className={styles["project-category-title"]}>The Odin Project</h3>
        </div>
        </div>
    );
};

export default ProjectList;