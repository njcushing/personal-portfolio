import { forwardRef } from 'react';
import styles from './index.module.css';

import ProjectPanelParams from './components/ProjectPanel/ProjectPanelParams';

import ProjectList from './components/ProjectList/ProjectList';

import battleshipThumbnail from './assets/battleship-thumbnail.png';
import libraryThumbnail from './assets/library-thumbnail.png';
import ticTacToeThumbnail from './assets/tic-tac-toe-thumbnail.png';
import toDoListThumbnail from './assets/to-do-list-thumbnail.png';

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
        githubUrl: "https://github.com/njcushing/odin-battleship",
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
        githubUrl: "https://github.com/njcushing/odin-library",
    },
    { ...params(),
        name: "Tic-Tac-Toe",
        desc: [
            `Play a game of Tic-Tac-Toe locally against a friend or against the
            computer! The computer has two settings: one for random placement
            and another for perfect AI where it never loses!`,
        ],
        imgSrc: ticTacToeThumbnail,
        imgAlt: "Tic-Tac-Toe application",
        pageUrl:"https://njcushing.github.io/odin-tic-tac-toe/",
        githubUrl: "https://github.com/njcushing/odin-tic-tac-toe",
    },
    { ...params(),
        name: "To-Do List",
        desc: [
            `Create projects and add to-do items. Set an item's name,
            description, priority and more! You can sort your items on various
            criteria and set them to complete when you're done. You can
            even save them to local storage!`,
        ],
        imgSrc: toDoListThumbnail,
        imgAlt: "To-Do List application",
        pageUrl:"https://njcushing.github.io/odin-to-do-list/",
        githubUrl: "https://github.com/njcushing/odin-to-do-list",
    },
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