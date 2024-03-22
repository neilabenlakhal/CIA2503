const http = require('http') // http built in module
//use parameters req and res for our server as we need access to these
const server = http.createServer((req, res) => {
    console.log('user hit the server');

})//a callback function will be called every time a user hits the sever

server.listen(5000) // listen on port 5000
