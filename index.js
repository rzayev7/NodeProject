
const useCors = require('./middlewares/cors-midlleware.js');
const handleRoutes = require('./routes/router.js');
const http = require('http');
const PORT = 3333;



const server = http.createServer((req,res)=>{
    useCors(req,res,()=>{
        handleRoutes(req,res);
    })
})

server.listen(PORT,()=>{
    console.log('Server is listening on PORT:',PORT);
})