const findGridColumnCount = (grid) => {
    try {
        const gridComputedStyle = window.getComputedStyle(grid);
        const columnWidthsString = gridComputedStyle.getPropertyValue("grid-template-columns");
        const numberOfColumns = columnWidthsString.split(" ").length;
        return numberOfColumns;
    } catch (error) {
        return null;
    }
};

export default findGridColumnCount;