const setDefaultFilters = (columnsArr) => {
    const returnObj = {}

    columnsArr.forEach(({ name, type }) => {
        if (type === 'number') {
            const filterObj = {
                filters: [],
                min: null,
                max: null,
            }

            returnObj[name] = filterObj
        } else {
            returnObj[name] = () => {}
            returnObj[name].value = ''
        }
    })

    return returnObj
}
export default setDefaultFilters
