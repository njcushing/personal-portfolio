import PropTypes from "prop-types";

let ProjectPanelParams = {};

ProjectPanelParams.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    projectName: PropTypes.string,
    projectDesc: PropTypes.arrayOf(PropTypes.string),
    pageUrl: PropTypes.string,
    githubUrl: PropTypes.string,
};

ProjectPanelParams.defaultProps = {
    imgSrc: "",
    imgAlt: "",
    projectName: "Project Name",
    projectDesc: ["Project description"],
    pageUrl: null,
    githubUrl: null,
};

export default ProjectPanelParams;
