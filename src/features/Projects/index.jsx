import { forwardRef } from 'react';
import styles from './index.module.css';

import ProjectPanelParams from './components/ProjectPanel/ProjectPanelParams';

import ProjectList from './components/ProjectList/ProjectList';

import toDoListThumbnail from './assets/to-do-list-thumbnail.png';
import battleshipThumbnail from './assets/battleship-thumbnail.png';
import libraryThumbnail from './assets/library-thumbnail.png';
import ticTacToeThumbnail from './assets/tic-tac-toe-thumbnail.png';
import weatherAppThumbnail from './assets/weather-app-thumbnail.png';
import signUpFormThumbnail from './assets/sign-up-form-thumbnail.png';
import adminDashboardThumbnail from './assets/admin-dashboard-thumbnail.png';
import shoppingCartThumbnail from './assets/shopping-cart-thumbnail.png';
import memoryCardThumbnail from './assets/memory-card-thumbnail.png';

const params = () => {  return { ...ProjectPanelParams.defaultProps, }; }

const theOdinProjects = [

    { ...params(),
        name: "To-Do List",
        desc: [
            `Create projects and add to-do items. Set an item's name,
            description, priority and more! You can sort your items on various
            criteria and set them to complete when you're done. You can
            even save projects to local storage!`,
        ],
        imgSrc: toDoListThumbnail,
        imgAlt: "To-Do List application",
        pageUrl: "https://njcushing.github.io/odin-to-do-list/",
        githubUrl: "https://github.com/njcushing/odin-to-do-list",
    },

    { ...params(),
        name: "Battleship",
        desc: [
            `Fancy a game of battleship? Play locally against a friend or
            against the computer that uses AI to give you a proper challenge.`,
        ],
        imgSrc: battleshipThumbnail,
        imgAlt: "Battleship application",
        pageUrl: "https://njcushing.github.io/odin-battleship/",
        githubUrl: "https://github.com/njcushing/odin-battleship",
    },

    { ...params(),
        name: "Library",
        desc: [
            `A small library application that allows you to add and delete
            books. Each book can be given an author, a page count and an
            identification of whether or not it has been read. (This project
            does not save on reload).`,
        ],
        imgSrc: libraryThumbnail,
        imgAlt: "Library application",
        pageUrl: "https://njcushing.github.io/odin-library/",
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
        pageUrl: "https://njcushing.github.io/odin-tic-tac-toe/",
        githubUrl: "https://github.com/njcushing/odin-tic-tac-toe",
    },

    { ...params(),
        name: "Weather App",
        desc: [
            `A small application that displays some information about the
            current weather from wherever you like in the world.`,
        ],
        imgSrc: weatherAppThumbnail,
        imgAlt: "Weather application",
        pageUrl: "https://njcushing.github.io/odin-weather-app/",
        githubUrl: "https://github.com/njcushing/odin-weather-app",
    },

    { ...params(),
        name: "Sign Up Form",
        desc: [
            `More of a proof-of-concept, this project was made to practise
            using form fields and error messages when the form fields' contents
            are incorrect.`,
        ],
        imgSrc: signUpFormThumbnail,
        imgAlt: "Sign Up Form application",
        pageUrl: "https://njcushing.github.io/odin-sign-up-form/",
        githubUrl: "https://github.com/njcushing/odin-sign-up-form",
    },

    { ...params(),
        name: "Admin Dashboard",
        desc: [
            `An example social media page that utilises many flexible display
            elements, made for practising the use of CSS Grid.`,
        ],
        imgSrc: adminDashboardThumbnail,
        imgAlt: "Admin Dashboard application",
        pageUrl: "https://njcushing.github.io/odin-admin-dashboard/",
        githubUrl: "https://github.com/njcushing/odin-admin-dashboard",
    },

    { ...params(),
        name: "Shopping Cart",
        desc: [
            `A mock shop website where you can add various items from multiple
            categories to a cart, see your total price and go to the checkout.`,
        ],
        imgSrc: shoppingCartThumbnail,
        imgAlt: "Shopping Cart application",
        pageUrl: "https://main--melodious-choux-e340b9.netlify.app/",
        githubUrl: "https://github.com/njcushing/odin-shopping-cart",
    },

    { ...params(),
        name: "Memory Card",
        desc: [
            `A memory game where you increase your score by clicking the cards
            on the screen without clicking the same one more than once.`,
        ],
        imgSrc: memoryCardThumbnail,
        imgAlt: "Memory Card application",
        pageUrl: "https://magnificent-manatee-6e8204.netlify.app/",
        githubUrl: "https://github.com/njcushing/odin-memory-card",
    },

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