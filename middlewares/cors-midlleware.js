const { HTTP_METHODS } = require('../helpers/enums.js');

function useCors(req, res, next) {
    if (req.method === HTTP_METHODS.OPTIONS) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        return res.end(); // Return early to prevent calling next() after res.end()
    }
    next(); // Call next() only if the method is not OPTIONS
}

module.exports = useCors;
