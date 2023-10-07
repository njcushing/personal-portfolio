import { useState, useEffect, useRef, useMemo } from 'react';
import styles from './index.module.css';

import photo from '@/assets/NiallCushingPhoto.jpg';
import ProjectPanel from './components/ProjectPanel/ProjectPanel';

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

const projects = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const ProjectList = () => {
    const [rowCount, setRowCount] = useState(2);
    const [columnCount, setColumnCount] = useState(0);

    const populateList = () => {
        const projectCountToDisplay = (rowCount * columnCount);
        const trimmedProjectArray = [];
        for (let i = 0; i < Math.min(projects.length, projectCountToDisplay); i++) {
            trimmedProjectArray.push(projects[i]);
        }
        return trimmedProjectArray;
    }

    const projectListRef = useRef(null);
    const projectList = useMemo(() => {
        return(
            <div
                className={styles["project-category-projects"]}
                ref={projectListRef}
            >
                {populateList().map((project, i) => <ProjectPanel key={i} />)}
            </div>
        );
    }, [rowCount, columnCount]);

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
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <h2 className={styles["title"]}>My Projects</h2>
            <div className={styles["project-category"]}>
                <h3 className={styles["project-category-title"]}>The Odin Project</h3>
                {projectList}
            </div>
        </div>
        </div>
    );
};

export default ProjectList;