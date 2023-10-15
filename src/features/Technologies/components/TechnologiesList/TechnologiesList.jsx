import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './TechnologiesList.module.css';

import animateInViewport from '@/utils/animateInViewport';

import {
    technologiesCategories,
    validateTechnologies,
    getCategoryName,
} from '@/utils/technologiesInformation';

import TechnologyPanel from '../TechnologyPanel/TechnologyPanel';

const TechnologiesList = ({
    category,
    technologies,
}) => {
    const wrapperRef = useRef(null);

    const reducedTechnologiesArray = validateTechnologies(
        category, technologies, "TechnologiesList"
    );

    useEffect(() => {
        const eventListener = animateInViewport(wrapperRef.current);
        window.addEventListener("scroll", eventListener);
        return () => window.removeEventListener("scroll", eventListener);
    }, [wrapperRef]);

    return (
        <div className={styles["wrapper"]} ref={wrapperRef}>
        <div className={styles["container"]}>
            <h3 className={styles["category-title"]}>{getCategoryName(category)}</h3>
            <ul className={styles["technologies-panels-container"]}>
                {reducedTechnologiesArray.map((technology) =>
                    <li key={technology}>
                        <TechnologyPanel
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
    category: PropTypes.oneOf(technologiesCategories()).isRequired,
    technologies: PropTypes.array,
};

TechnologiesList.defaultProps = {
    technologies: [],
}

export default TechnologiesList;