import { forwardRef } from 'react';
import styles from './index.module.css';

import ProjectPanelParams from './components/ProjectPanel/ProjectPanelParams';

import ProjectList from './components/ProjectList/ProjectList';

import battleshipThumbnail from './assets/battleship-thumbnail.png';
import libraryThumbnail from './assets/library-thumbnail.png';

const params = () => {  return { ...ProjectPanelParams.defaultProps, }; }

const theOdinProjects = [

    /* Battleship */
    { ...params(),
        name: "Battleship",
        desc: [
            `Fancy a game of battleship? Play locally against a friend or
            against the computer that uses AI to give you a proper challenge.`,
        ],
        imgSrc: battleshipThumbnail,
        imgAlt: "Battleship application",
        pageUrl:"https://njcushing.github.io/odin-battleship/",
        githubUrl: "https://github.com/njcushing/odin-battleship/",
    },

    { ...params(),
        name: "Library",
        desc: [
            `A small library application that allows you to add and delete
            books. Each book can be given an author, a page count and an
            identification of whether or not it has been read.`,
        ],
        imgSrc: libraryThumbnail,
        imgAlt: "Library application",
        pageUrl:"https://njcushing.github.io/odin-library/",
        githubUrl: "https://github.com/njcushing/odin-library/",
    },
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