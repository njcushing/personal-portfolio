import PropTypes from 'prop-types';
import styles from './ProjectPanel.module.css';

import ProjectPanelParams from './ProjectPanelParams';

import DeviconsAnchor from '@/components/DeviconsAnchor/DeviconsAnchor';
import MaterialSymbolsAnchor from '@/components/MaterialSymbolsAnchor/MaterialSymbolsAnchor';

const ProjectPanel = ({
    params,
}) => {
    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <div className={styles["image-container"]}><img
                className={styles["image"]}
                src={params.imgSrc}
                alt={params.imgAlt}
            ></img></div>
            <h4 className={styles["name"]}>{params.projectName}</h4>
            <ul className={styles["description-container"]}>
                {params.projectDesc.map((p, i) =>
                    <p
                        className={styles["description-paragraph"]}
                        key={i}
                    >{p}</p>
                )}
            </ul>
            <ul className={styles["link-buttons"]}>
                <li><MaterialSymbolsAnchor
                    href={params.pageUrl}
                    ariaLabel="The project's page"
                    text="open_in_new"
                    sizeRem={2.4}
                /></li>
                <li><DeviconsAnchor
                    href={params.githubUrl}
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
    params: PropTypes.shape({ ...ProjectPanelParams.propTypes, }),
}

ProjectPanel.defaultProps = {
    params: { ...ProjectPanelParams.defaultProps, },
}

export default ProjectPanel;