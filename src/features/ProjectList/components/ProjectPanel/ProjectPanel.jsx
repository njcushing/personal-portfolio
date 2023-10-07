import PropTypes from 'prop-types';
import styles from './ProjectPanel.module.css';

const ProjectPanel = ({
    imgSrc,
    imgAlt,
    projectName,
}) => {
    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <img
                className={styles["image"]}
                src={imgSrc}
                alt={imgAlt}
            ></img>
            <h4 className={styles["name"]}>{projectName}</h4>
            <p></p>
        </div>
        </div>
    );
};

ProjectPanel.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    projectName: PropTypes.string,
}

ProjectPanel.defaultProps = {
    imgSrc: "",
    imgAlt: "",
    projectName: "Project Name",
}

export default ProjectPanel;