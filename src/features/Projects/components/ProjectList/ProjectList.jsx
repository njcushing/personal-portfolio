import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectList.module.css';

import ProjectPanelParams from '../ProjectPanel/ProjectPanelParams';

import ProjectPanel from '../ProjectPanel/ProjectPanel';

const findGridColumns = (grid) => {
    try {
        const gridComputedStyle = window.getComputedStyle(grid);
        const columnWidthsString = gridComputedStyle.getPropertyValue("grid-template-columns");
        const numberOfColumns = columnWidthsString.split(" ").length;
        return numberOfColumns;
    } catch(error) {
        return null;
    }
};

const ProjectList = ({
    projectCategoryTitle,
    projects,
}) => {
    const [rowCount, setRowCount] = useState(2);
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
        const eventListener = () => {
            const viewportHeight = window.innerHeight;
            const elementYPosRelative = wrapperRef.current.getBoundingClientRect().y;
            if (elementYPosRelative < viewportHeight) {
                wrapperRef.current.setAttribute("animate", "true");
            }
        };
        window.addEventListener("scroll", eventListener);
        return () => window.removeEventListener("scroll", eventListener);
    }, [wrapperRef]);

    const projectListRef = useRef(null);
    const projectList = useMemo(() => {
        return(
            <div
                className={styles["project-category-projects"]}
                ref={projectListRef}
            >
                {reduceProjects().map((project, i) => {
                    return(
                        <ProjectPanel
                            params={project}
                            key={i}
                        />
                    );
                })}
            </div>
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
        const numberOfColumns = findGridColumns(projectListRef.current);
        if (numberOfColumns === null) return;
        if (columnCount !== numberOfColumns) setColumnCount(numberOfColumns);
    }, [projectList, columnCount]);

    useEffect(() => {
        const resizeEventListener = () => {
            const numberOfColumns = findGridColumns(projectListRef.current);
            if (numberOfColumns === null) return;
            if (columnCount !== numberOfColumns) setColumnCount(numberOfColumns);
        };
        window.addEventListener("resize", resizeEventListener);
        return () => window.removeEventListener("resize", resizeEventListener);
    }, [columnCount]);

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
}

ProjectList.defaultProps = {
    projectCategoryTitle: "Project Category",
    projects: [],
}

export default ProjectList;