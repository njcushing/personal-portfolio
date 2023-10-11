const animateInViewport = (element) => {
    return () => {
        const viewportHeight = window.innerHeight;
        const elementYPosRelative = element.getBoundingClientRect().y;
        if (elementYPosRelative < viewportHeight) {
            element.setAttribute("animate", "true");
        }
    };
};

export default animateInViewport;