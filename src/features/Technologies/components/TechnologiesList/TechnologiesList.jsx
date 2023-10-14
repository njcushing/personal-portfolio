import PropTypes from 'prop-types';
import styles from './TechnologiesList.module.css';

import {
    technologiesCategories,
    validateTechnologies,
    getCategoryName,
} from '@/utils/technologiesInformation';

import TechnologiesPanel from './../TechnologiesPanel/TechnologiesPanel';

const TechnologiesList = ({
    category,
    technologies,
}) => {
    const reducedTechnologiesArray = validateTechnologies(
        category, technologies, "TechnologiesList"
    );

    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <h3 className={styles["category-title"]}>{getCategoryName(category)}</h3>
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
    category: PropTypes.oneOf(technologiesCategories()).isRequired,
    technologies: PropTypes.array,
};

TechnologiesList.defaultProps = {
    technologies: [],
}

export default TechnologiesList;