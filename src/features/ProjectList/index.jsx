import styles from './index.module.css';

import photo from '@/assets/NiallCushingPhoto.jpg';
import ProjectPanel from './components/ProjectPanel/ProjectPanel';

const ProjectList = () => {
    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <h2 className={styles["title"]}>My Projects</h2>
            <div className={styles["project-category"]}>
                <h3 className={styles["project-category-title"]}>The Odin Project</h3>
                <div className={styles["project-category-projects"]}>
                    <ProjectPanel />
                    <ProjectPanel />
                    <ProjectPanel />
                    <ProjectPanel />
                    <ProjectPanel />
                    <ProjectPanel />
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProjectList;