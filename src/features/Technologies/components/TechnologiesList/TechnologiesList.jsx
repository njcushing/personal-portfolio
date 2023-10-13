import PropTypes from 'prop-types';
import styles from './TechnologiesList.module.css';

import TechnologiesPanel from './../TechnologiesPanel/TechnologiesPanel';

const technologiesAssociations = {
    "languages": {
        name: "Languages",
        technologies: new Set(["html", "css"]),
    },
    "frontend": {
        name: "Frontend",
        technologies: new Set(["javascript", "react"]),
    },
    "backend": {
        name: "Backend",
        technologies: new Set([]),
    },
    "tools": {
        name: "Tools",
        technologies: new Set(["git"]),
    },
};

const validateTechnologies = (category, technologies) => {
    const reducedTechnologiesArray = [];
    for (let i = 0; i < technologies.length; i++) {
        if (!technologiesAssociations[category].technologies.has(technologies[i])) {
            console.error(
                new Error(
                      "Invalid prop "
                    + `'${technologies[i]}' `
                    + "supplied to "
                    + `'${category}' `
                    + "category of "
                    + "'TechnologiesList', expected one of: "
                    + `${[...technologiesAssociations[category].technologies]}`
                )
            );
        } else {
            reducedTechnologiesArray.push(technologies[i]);
        }
    }
    return reducedTechnologiesArray;
}

const TechnologiesList = ({
    category,
    technologies,
}) => {
    const reducedTechnologiesArray = validateTechnologies(category, technologies);

    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <h3 className={styles["category-title"]}>{category}</h3>
            <ul className={styles["technologies-panels-container"]}>
                {reducedTechnologiesArray.map((technology) =>
                    <li key={technology}>
                        <TechnologiesPanel
                            technologyID={technology}
                        />
                    </li>
                )}
            </ul>
        </div>
        </div>
    );
};

TechnologiesList.propTypes = {
    category: PropTypes.oneOf(Object.keys(technologiesAssociations)).isRequired,
    technologies: PropTypes.array,
};

TechnologiesList.defaultProps = {
    technologies: [],
}

export default TechnologiesList;