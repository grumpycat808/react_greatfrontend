const setDefaultFilters = (columnsArr) => {
    const returnObj = {}

    columnsArr.forEach(({ name, type }) => {
        if (type === 'number') {
            returnObj[name] = { min: null, max: null }
        } else {
            returnObj[name] = ''
        }
    })

    return returnObj
}
 export default setDefaultFilters;