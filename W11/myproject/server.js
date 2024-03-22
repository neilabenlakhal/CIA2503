
//to run this file : type in the integrated terminal node server.js
/*

Open your web browser and navigate to http://localhost:3000. 
You should see the contents of your index.html file displayed in the browser.
In this example, we use Node.js's built-in http module to create an HTTP server 
that listens for incoming requests on port 3000. 

When a request is received, we check if the URL is /, and if it is,
we read the contents of the index.html file using Node.js's built-in fs module
 and send it back as the response.

Note that this is a very basic example, and in a real-world application,
 you would want to use a web framework like Express.js to handle more complex
  routing and middleware.

*/

const http = require('http');
/*
This line imports the built-in http module in Node.js and assigns it to a 
variable named http. The require() function is used to import modules in Node.js.
http module provides the functionality for creating HTTP servers and making HTTP requests.

*/

const fs = require('fs');
/*This line imports the built-in fs (file system) module in Node.js 
and assigns it to a variable named fs. We use this module to read the contents 
of the index.html file later in the code.
 */

const server = http.createServer((req, res) => {

    /* Create an HTTP server--
   This line creates a new HTTP server using the createServer()
    method of the http module. The method takes a function as an argument,
     which is called each time a new request is received by the server.
      In this example, we define an anonymous function that takes two arguments:
       req (short for request) and res (short for response).
   */
    if (req.url === '/') {

        // If the request URL is '/', read the contents of 'index.html' and send it as the response

        /*This if statement checks if the URL of the incoming request is the root URL (/).
         If it is, we read the contents of the index.html file and send it back as the response.
          If the URL is not the root URL, we send a 404 Not Found response.
        */

        fs.readFile('./index.html', (err, data) => {

            /* If the incoming request is for the root URL, this code is executed.
             We use the readFile() method of the fs module to read the contents 
             of the index.html file. The method takes two arguments: the path to the file
              (in this case, ./index.html) and a callback function that is called when the
               file has been read. If there is an error reading the file, 
               we send a 500 Internal Server Error response. 
               If the file is read successfully, 
               we send a 200 OK response with the contents of the file
                as the response body. 
                We also set the Content-Type header to text/html, 
                indicating that the response body is HTML.
            */
            if (err) {
                // If there's an error reading the file, send a 500 response with an error message
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                // If the file is read successfully, send a 200 response with the file contents as the response body
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // If the request URL is anything other than '/', send a 404 response
        res.writeHead(404);
        res.end('Page not found');
    }
});

// Start the server and listen for incoming requests on port 3000

/* This line starts the server and tells it to listen for 
incoming requests on port 3000. We also log a message to the console
 indicating that the server is running.
*/ 
server.listen(3000, () => {
    console.log('Server running on port 3000, and saying hello');
});
