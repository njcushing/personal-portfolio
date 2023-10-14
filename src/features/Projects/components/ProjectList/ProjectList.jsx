import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectList.module.css';

import ProjectPanelParams from '../ProjectPanel/ProjectPanelParams';

import ProjectPanel from '../ProjectPanel/ProjectPanel';
import animateInViewport from '@/utils/animateInViewport';
import findGridColumnCount from '../../utils/findGridColumnCount';

const ProjectList = ({
    projectCategoryTitle,
    projects,
    initRowCount,
}) => {
    const [rowCount, setRowCount] = useState(initRowCount);
    const [columnCount, setColumnCount] = useState(0);

    const wrapperRef = useRef(null);

    const reduceProjects = useCallback(() => {
        const trimmedProjectArray = [];
        for (let i = 0; i < Math.min(projects.length, (rowCount * columnCount)); i++) {
            trimmedProjectArray.push(projects[i]);
        }
        return trimmedProjectArray;
    }, [projects, rowCount, columnCount]);

    useEffect(() => {
        const eventListener = animateInViewport(wrapperRef.current);
        window.addEventListener("scroll", eventListener);
        return () => window.removeEventListener("scroll", eventListener);
    }, [wrapperRef]);

    const projectListRef = useRef(null);
    const projectList = useMemo(() => {
        return(
            <ul
                className={styles["project-category-projects"]}
                ref={projectListRef}
            >
                {reduceProjects().map((project, i) => {
                    return(
                        <li key={i}><ProjectPanel
                            params={project}
                        /></li>
                    );
                })}
            </ul>
        );
    }, [reduceProjects]);

    const showMoreButton = useMemo(() => {
        if ((rowCount * columnCount) >= projects.length) return null;
        return(
            <button
                className={styles["show-more-button"]}
                onClick={(e) => {
                    setRowCount(rowCount + 1); 
                    e.target.blur();
                    e.preventDefault();
                }}
            >Show More...</button>
        );
    }, [projects, rowCount, columnCount]);

    useEffect(() => {
        const resizeEventListener = () => {
            const numberOfColumns = findGridColumnCount(projectListRef.current);
            if (numberOfColumns != columnCount) setColumnCount(numberOfColumns);
        };
        window.addEventListener("resize", resizeEventListener);
        return () => window.removeEventListener("resize", resizeEventListener);
    }, [projectListRef, columnCount]);

    useEffect(() => {
        window.dispatchEvent(new Event("resize")); /* For first render on component mount */
    }, []);

    return (
        <div className={styles["wrapper"]} ref={wrapperRef}>
        <div className={styles["container"]}>
            <h3 className={styles["project-category-title"]}>{projectCategoryTitle}</h3>
            {projectList}
            {showMoreButton}
        </div>
        </div>
    );
};

ProjectList.propTypes = {
    projectCategoryTitle: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.shape({ ...ProjectPanelParams.propTypes, })),
    initRowCount: PropTypes.number,
}

ProjectList.defaultProps = {
    projectCategoryTitle: "Project Category",
    projects: [],
    initRowCount: 2,
}

export default ProjectList;