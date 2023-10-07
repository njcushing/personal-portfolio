import PropTypes from 'prop-types';
import styles from './ProjectPanel.module.css';

import DeviconsAnchor from '@/components/DeviconsAnchor/DeviconsAnchor';
import MaterialSymbolsAnchor from '@/components/MaterialSymbolsAnchor/MaterialSymbolsAnchor';

const ProjectPanel = ({
    imgSrc,
    imgAlt,
    projectName,
    projectDesc,
    pageLink,
    githubLink,
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
            <ul className={styles["description-container"]}>
                {projectDesc.map((p, i) =>
                    <p
                        className={styles["description-paragraph"]}
                        key={i}
                    >{p}</p>
                )}
            </ul>
            <ul className={styles["link-buttons"]}>
                <li><DeviconsAnchor
                    href="https://github.com/njcushing"
                    ariaLabel="github"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="github"
                    sizeRem={2.4}
                /></li>
            </ul>
        </div>
        </div>
    );
};

ProjectPanel.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    projectName: PropTypes.string,
    projectDesc: PropTypes.arrayOf(PropTypes.string),
}

ProjectPanel.defaultProps = {
    imgSrc: "",
    imgAlt: "",
    projectName: "Project Name",
    projectDesc: [],
}

export default ProjectPanel;