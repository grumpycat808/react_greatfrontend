const setDefaultFilters = (columnsArr) => {
    const returnObj = {}

    columnsArr.forEach(({ name, type }) => {
        if (type === 'number') {
            const filterObj = {};
            filterObj.filters = [];
            filterObj.min = null;
            filterObj.max = null;
            returnObj[name] = filterObj;
        } else {
            returnObj[name] = () => {}
            returnObj[name].value = ''
        }
    })

    return returnObj
}
export default setDefaultFilters
