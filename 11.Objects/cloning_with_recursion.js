function cloneObject(object) {

    if (object === null || typeof object !== 'object') {
        return object;
    }

    let temporary = object.constructor();
    for (let key in object) {
        temporary[key] = cloneObject(object[key]);
    }
    return temporary;
}