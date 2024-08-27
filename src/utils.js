const setDefaultFilters = (columnsArr) => {
    const returnObj = {}

    columnsArr.forEach(({ name, type }) => {
        let filterObj;
        if (type === 'number') {
             filterObj = {
                filters: [],
                min: null,
                max: null,
            }

            
        } else {
             filterObj = {
                filters:  [() => {}],
                value: ''
            }
            
        }
        returnObj[name] = filterObj
    })

    return returnObj
}
export default setDefaultFilters
