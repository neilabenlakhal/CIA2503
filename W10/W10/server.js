// Import the built-in 'http' module for creating an HTTP server.
const http = require('http');

// Create an HTTP server and define how it should handle incoming requests.
const server = http.createServer((req, res) => {
    // 'req' represents the incoming request object, which contains information about the client's request.

    // Check if the requested URL is the root ("/") and respond accordingly.
    if (req.url === '/') {
        res.writeHeader(200, { 'Content-Type': 'text/html' }); // Set the response header

        // 'res' represents the response object, which is used to send data back to the client.
        res.end("Welcome to our home page");
    } else if (req.url === '/about') {
        res.writeHeader(200, { 'Content-Type': 'text/html' }); // Set the response header
        res.end('<h1>Here is our short history</h1>');
    } else {
        res.writeHeader(404, { 'Content-Type': 'text/html' }); // Set a 404 status code

        // If the requested URL doesn't match the above cases, respond with a "not found" message
        // and provide a link to the home page.
        res.end(`<h1>Oops!</h1><p>Cannot find what you are looking for.</p><a href='/'>Back home</a>`);
    }
});

// Start the server and have it listen on port 5500.
server.listen(5500);



