const userController = require('../controllers/user-controller.js');
const urlHelper = require('../helpers/url-helper.js');

const handleUserRoutes = (req,res) =>{
    const {url} = req;
    switch(url){
        case urlHelper.USER_CREATE:
            userController.createUser(req,res);
            break;
        case urlHelper.USER_GETALL:
            userController.getAllUsers(req,res);
            break;
    }
}

module.exports = {
    handleUserRoutes
}