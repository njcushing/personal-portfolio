import PropTypes from 'prop-types';
import styles from './TechnologiesList.module.css';

import TechnologiesPanel from './../TechnologiesPanel/TechnologiesPanel';

const TechnologiesList = ({
    categoryName,
}) => {
    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <h3 className={styles["category-title"]}>{categoryName}</h3>
            <ul className={styles["technologies-panels-container"]}>
                <li><TechnologiesPanel technologyID="html" /></li>
                <li><TechnologiesPanel technologyID="css" /></li>
                <li><TechnologiesPanel technologyID="javascript" /></li>
                <li><TechnologiesPanel technologyID="react" /></li>
                <li><TechnologiesPanel technologyID="git" /></li>
            </ul>
        </div>
        </div>
    );
};

TechnologiesList.propTypes = {
    categoryName: PropTypes.string,
}

TechnologiesList.defaultProps = {
    categoryName: "Category Name",
}

export default TechnologiesList;