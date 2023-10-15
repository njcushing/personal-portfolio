import PropTypes from "prop-types";

let ProjectPanelParams = {};

ProjectPanelParams.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.arrayOf(PropTypes.string),
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    technologies: PropTypes.array,
    desktopCompatible: PropTypes.bool.isRequired,
    mobileCompatible: PropTypes.bool.isRequired,
    tabletCompatible: PropTypes.bool.isRequired,
    pageUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
};

ProjectPanelParams.defaultProps = {
    name: "Project Name",
    desc: ["Project description"],
    imgSrc: "",
    imgAlt: "",
    technologies: [],
    desktopCompatible: false,
    tabletCompatible: false,
    mobileCompatible: false,
    pageUrl: null,
    githubUrl: null,
};

export default ProjectPanelParams;
