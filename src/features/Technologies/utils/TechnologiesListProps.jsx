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

const technologiesCategories = () => {
    return Object.keys(technologiesAssociations);
}

const allTechnologies = () => {
    const categories = Object.keys(technologiesAssociations);
    let arr = [];
    for (let i = 0; i < categories.length; i++) {
        arr = [...arr, ...technologiesAssociations[categories[i]].technologies]
    }
    return arr;
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

export {
    technologiesCategories,
    allTechnologies,
    validateTechnologies,
};