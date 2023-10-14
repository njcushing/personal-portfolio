import PropTypes from "prop-types";

let ProjectPanelParams = {};

ProjectPanelParams.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.arrayOf(PropTypes.string),
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    technologies: PropTypes.array,
    pageUrl: PropTypes.string,
    githubUrl: PropTypes.string,
};

ProjectPanelParams.defaultProps = {
    name: "Project Name",
    desc: ["Project description"],
    imgSrc: "",
    imgAlt: "",
    technologies: [],
    pageUrl: null,
    githubUrl: null,
};

export default ProjectPanelParams;
