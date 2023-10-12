const verticalScrollToElement = (element, borderBuffer) => {
    try {
        const viewportHeight = window.innerHeight;
        const elementHeight = element.getBoundingClientRect().height + (2 * borderBuffer);
        const elementYPos = element.offsetTop;
        if (elementHeight > viewportHeight) {
            window.scrollTo({ top: Math.max(0, (elementYPos - borderBuffer)), behavior: "smooth" })
        } else {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    } catch (error) {
        return null;
    }
};

export default verticalScrollToElement;