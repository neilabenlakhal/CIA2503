/*

express.js : Node.js framework
First, you need to install Node.js and NPM (Node Package Manager) on your system. 
You can do this by downloading the installer from the Node.js website.

Once you have Node.js and NPM installed, create a new directory for 
your project (ex4), create app.js, and initialize a new Node.js 
project by running the following command in your terminal:

npm init -y // the package.json file will appear
The npm init -y command will create a new package.json file for your project.

Next, install Express.js as a dependency for your project by running 
the following command in your terminal:

npm install express 

this will install the latest version of Express.js and its dependencies
 into your project's node_modules directory.

Now, create a new file named app.js in your project directory and add the following code:

*/

/* // Import the express module
const express = require('express');

// Create a new express application
const app = express();

// Define a route handler for the default route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
 */

const express = require('express');  //import the module 
const app = express(); // invoke the express module

app.get('/', (req, res)=>{
    console.log('user hit the resource');
    res.status(200).send('Home Page')
})
app.get('/about', (req, res)=>{
    res.status(200).send('About Page')
})
app.all('*',(req, res)=>{
    res.status(404).send('<h1>resource not found</h1><p>please try again </p>')
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})


/*

Let's go through this code step by step:

First, we import the Express.js module using the require() function and 
assign it to a variable named express.

Next, we create a new instance of the Express.js application by 
calling the express() function and assign it to a variable named app.

Then, we define a route handler for the default route (/). 
In this case, we're using the app.get() method to handle HTTP GET requests
 to the default route. When a GET request is made to the default route, 
 the handler function is called with two arguments: the request (req) 
 and the response (res) objects. In this example, we're sending the 
 response with a simple message, "Hello, world!".

Finally, we start the server by calling the app.listen() 
method and specifying the port number we want to listen on (3000). 
This method takes a callback function that is called once the 
server starts listening. In this example, we're simply logging a 
message to the console indicating that the server has started.
*/