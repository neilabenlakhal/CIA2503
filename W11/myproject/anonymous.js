

/* Anonymous functions are functions that do not have a name and are defined 
on the fly as arguments to other functions.

Anonymous functions are also commonly used in Node.js for event listeners.
 For example, when we create an HTTP server using the createServer() method
  of the http module, we need to provide a callback function that will be called
   each time a new request is received by the server. Here's an example:

In this example, we pass an anonymous function as the argument to createServer(). 
The function takes two arguments: req and res. 
It is called each time a new request is received by the server. 
In this case, we simply send a response that says "Hello, World!" and end the response.



In the notation const server = http.createServer((req, res) => { ... });, 
we are creating an HTTP server using the createServer() method of the http module. 
The createServer() method takes a function as an argument. 
This function is called each time a new request is received by the server.

In this case, we are using an anonymous function as the argument to createServer(). 
The anonymous function takes two arguments: req and res. 
These represent the incoming request and the outgoing response, respectively.

The notation (req, res) => { ... } is an arrow function, 
a shorthand syntax for writing anonymous functions. 
It consists of the following parts:

(req, res): This is the list of parameters that the function takes. 
In this case, the function takes two parameters: req and res.

=>: This is the arrow symbol, which separates the list of parameters from the function body.

{ ... }: This is the function body. It contains the code that will be executed 
each time the function is called.

In this case, the function body simply calls the end() method of the res object 
to send a response that says "Hello, World!" back to the client.

Using an anonymous function like this allows us to define the behavior of 
the server on the fly, without needing to define a separate named function. 
It's a common pattern in Node.js for creating event-driven applications.



*/

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
