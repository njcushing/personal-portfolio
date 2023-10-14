import PropTypes from 'prop-types';
import styles from './ProjectPanel.module.css';

import ProjectPanelParams from './ProjectPanelParams';
import { validateTechnologies } from '@/utils/technologiesInformation';

import TechnologyNameBox from './../TechnologyNameBox/TechnologyNameBox';
import DeviconsAnchor from '@/components/DeviconsAnchor/DeviconsAnchor';
import MaterialSymbolsAnchor from '@/components/MaterialSymbolsAnchor/MaterialSymbolsAnchor';

const ProjectPanel = ({
    params,
}) => {
    const reducedTechnologiesArray = validateTechnologies(null, params.technologies);

    return (
        <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
            <div className={styles["image-container"]}><img
                className={styles["image"]}
                src={params.imgSrc}
                alt={params.imgAlt}
            ></img></div>
            <h4 className={styles["name"]}>{params.name}</h4>
            <ul className={styles["description-container"]}>
                {params.desc.map((p, i) =>
                    <li key={i}><p
                        className={styles["description-paragraph"]}
                    >{p}</p></li>
                )}
            </ul>
            <div className={styles["technologies-and-links-container"]}>
                <ul className={styles["technologies-list"]}>
                    {reducedTechnologiesArray.map((technology) =>
                        <li key={technology}>
                            <TechnologyNameBox
                                technologyID={technology}
                            />
                        </li>
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