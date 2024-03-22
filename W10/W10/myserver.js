

// Step 1: Open your command prompt or terminal.

// Step 2: Navigate to the directory where your JavaScript file is located (the file containing this code).

// Step 3: Run the Node.js server by executing the following command:
// `node your_file_name.js`

// Step 4: The server will start listening on port 8080.

// Step 5: Open a web browser and navigate to 'http://localhost:8080'.
// You should see the "Hello!" message displayed in the browser, indicating the server is working correctly.

// Step 6: To stop the server, you can terminate the Node.js process (e.g., press Ctrl+C in the command prompt or terminal where the server is running).


// Import the built-in 'http' module for creating an HTTP server.
var http = require('http');

// Create an HTTP server and define how it should handle incoming requests.
var server = http.createServer(function (req, res) {
  // 'req' represents the incoming request object, which contains information about the client's request.
  // 'res' represents the response object, which is used to send data back to the client.

  // Write the response data "Hello!" to the client.
  res.write('Hello!');

  // End the response, indicating that all the response data has been sent.
  res.end();
});

// Start the server and have it listen on port 8080 for incoming connections.
server.listen(8080);
