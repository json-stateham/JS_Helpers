//SOLUTION 1:

const deepCopyObj = JSON.parse(JSON.stringify(nestedArray));



//SOLUTION 2:
const deepCopy = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        newObj[key] = deepCopy(obj[key]);
    }

    return newObj;
};