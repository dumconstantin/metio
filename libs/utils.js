'use strict'

//TODO: Use a recursive method is simpler
var getProp = R.curry(function (defaultValue, props, obj) {
    return R.defaultTo(defaultValue 
        , R.reduce(R.ifElse(R.is(Object)
                , R.flip(R.prop)
                , R.always(undefined)
                )
            , obj
            , R.split('.', props)
            )
        )
})

//TODO: Use immutable js instead
var setProp = R.curry(function setProperty(propName, propValue, obj) {
    var clonedObject = R.clone(obj)
    clonedObject[propName] = propValue
    return clonedObject
})

var flattenBy = R.curry(function flattenByFunc(prop, list) {
    return list.reduce(function(flatList, item) {
        return flatList.concat(item, flattenBy(prop, item[prop]))
    }, [])
})

var listCall = R.curry(function listCallFunc(funcList, list) {
    return funcList.map(function (func, index) {
        return func(list[index])
    })
})

module.exports = {
    getProp: getProp 
    , setProp: setProp
    , argumentsToArray: Array.prototype.slice.call
    , flattenBy: flattenBy
    , listCall: listCall
		, formatJson: curryN(3, JSON.stringify)(__, null, 4)
}
