const userService = require('../services/user-service.js');
const generateResponse = require('../utils/response-generator.js');
const parseRequestBody = require('../utils/parser.js');
const User = require('../models/user.js');

const getAllUsers = async (req,res) =>{
    const data = await userService.getAllUsers();
    generateResponse(200,res,data);
}

const createUser = async (req,res)=>{
     const body = await parseRequestBody(req);
     const newUser = new User(body.email,body.fullname,body.username,body.password);
     const createUser = await userService.createUser(newUser);
     generateResponse(201,res,createUser);
}

module.exports = {
    getAllUsers,
    createUser
}
