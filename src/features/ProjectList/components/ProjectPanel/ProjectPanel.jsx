import PropTypes from 'prop-types';
import styles from './ProjectPanel.module.css';

import DeviconsAnchor from '@/components/DeviconsAnchor/DeviconsAnchor';
import MaterialSymbolsAnchor from '@/components/MaterialSymbolsAnchor/MaterialSymbolsAnchor';

const ProjectPanel = ({
    imgSrc,
    imgAlt,
    projectName,
    projectDesc,
    pageUrl,
    githubUrl,
}) => {
    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <div className={styles["image-container"]}><img
                className={styles["image"]}
                src={imgSrc}
                alt={imgAlt}
            ></img></div>
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
                <li><MaterialSymbolsAnchor
                    href={pageUrl}
                    ariaLabel="The project's page"
                    text="open_in_new"
                    sizeRem={2.4}
                /></li>
                <li><DeviconsAnchor
                    href={githubUrl}
                    ariaLabel="The project on github"
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
    pageUrl: PropTypes.string,
    githubUrl: PropTypes.string,
}

ProjectPanel.defaultProps = {
    imgSrc: "",
    imgAlt: "",
    projectName: "Project Name",
    projectDesc: ["Project description"],
    pageUrl: null,
    githubUrl: null,
}

export default ProjectPanel;