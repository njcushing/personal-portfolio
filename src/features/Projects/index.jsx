import { forwardRef } from 'react';
import styles from './index.module.css';

import ProjectPanelParams from './components/ProjectPanel/ProjectPanelParams';

import ProjectList from './components/ProjectList/ProjectList';

const params = () => {  return { ...ProjectPanelParams.defaultProps, }; }

const theOdinProjects = [
    { ...params(), },
    { ...params(), },
    { ...params(), },
    { ...params(), },
    { ...params(), },
    { ...params(), },
    { ...params(), },
    { ...params(), },
    { ...params(), },
    { ...params(), },
];

const Projects = forwardRef(function Projects(props, ref) {
    return (
        <div className={styles["wrapper"]} ref={ref}>
        <div className={styles["container"]}>
            <h2 className={styles["title"]}>My Projects</h2>
            <ProjectList
                projectCategoryTitle="The Odin Project"
                projects={theOdinProjects}
            />
        </div>
        </div>
    );
});

export default Projects;