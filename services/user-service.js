const baseService = require('./base-service.js');

const {DATABASE_TABLE_KEYS} = require('../helpers/enums.js'); 

const getAllUsers = async () =>{
    const allData = await baseService.getAllJsonDataFromText();
    return allData.users;
}

const createUser = async user => {
    const user1 = await baseService.createModel(user,DATABASE_TABLE_KEYS.USERS); 
    return user1;
}
module.exports = {
    getAllUsers,
    createUser
}




 



