import { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

import ProjectPanelParams from './components/ProjectPanel/ProjectPanelParams';

import photo from '@/assets/NiallCushingPhoto.jpg';
import ProjectList from './components/ProjectList/ProjectList';

const theOdinProjects = [
    { ...ProjectPanelParams.defaultProps, },
    { ...ProjectPanelParams.defaultProps, },
    { ...ProjectPanelParams.defaultProps, },
    { ...ProjectPanelParams.defaultProps, },
    { ...ProjectPanelParams.defaultProps, },
    { ...ProjectPanelParams.defaultProps, },
    { ...ProjectPanelParams.defaultProps, },
    { ...ProjectPanelParams.defaultProps, },
    { ...ProjectPanelParams.defaultProps, },
    { ...ProjectPanelParams.defaultProps, },
];

const Projects = () => {
    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <h2 className={styles["title"]}>My Projects</h2>
            <ProjectList
                projectCategoryTitle="The Odin Project"
                projects={theOdinProjects}
            />
        </div>
        </div>
    );
};

export default Projects;