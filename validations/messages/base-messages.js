

const generateLengthError = (field, min, max)=>{
    return `${field} must be between ${min} and ${max}`;
}


const generateDuplicateError = (field) =>{
    return `${field} has already exists in db`;
}

const generateNotNullError = (field) =>{
    return `${field} must not be null `
}


module.exports = {
    generateDuplicateError,
    generateNotNullError,
    generateLengthError
}