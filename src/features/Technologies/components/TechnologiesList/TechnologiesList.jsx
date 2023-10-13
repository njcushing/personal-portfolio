import PropTypes from 'prop-types';
import styles from './TechnologiesList.module.css';

const TechnologiesList = ({
    categoryName,
}) => {
    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <h3 className={styles["category-title"]}>{categoryName}</h3>
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