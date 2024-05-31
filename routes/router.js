const generateResponse = require('../utils/response-generator.js');
const urlHelper = require('../helpers/url-helper.js');
const userRoutes = require('./userRoutes.js');

const handleRoutes = (req,res) =>{
    console.log(req);
    
    const {url} = req;
    let newUrl = `/${url.split('/')[1]}`;

    switch (newUrl) {
        case urlHelper.DEFAULD_ENDPOINT:
            console.log('first');
            break;
        case urlHelper.USER_ENDPOINT:
            console.log('request invoked');
            userRoutes.handleUserRoutes(req,res);
            break
        default:
            generateResponse(404,res,{message : "not found"});
    }
}

module.exports = handleRoutes;

