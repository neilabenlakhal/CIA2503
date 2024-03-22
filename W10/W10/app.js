const http = require('http');
const server = http.createServer((req, res)=>{
    //req is request
if(req.url === '/'){
    //res is response
    res.end('Welcome to our home page')
}
if(req.url === '/about'){
    res.end('Here is our short history')
}
res.end(`<h1>Oops!<h1>
<p>Cant find what you are looking for</p>
<a href="/">back home</a>`)
})
server.listen(5000)
