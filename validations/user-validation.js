
const generateValidationResult = require('./validationResult.js');
const baseMessageActions = require('./messages/base-messages.js');

const checkUserNameLength = (user)=>{
    if(user.username<3 || user.username>15){
        return generateValidationResult(false,baseMessageActions.generateLengthError);
    }
}