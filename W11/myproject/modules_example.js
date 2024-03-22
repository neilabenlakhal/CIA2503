/*

There are three types of modules in Node.js:

Core modules: These are modules that are built into Node.js itself and are 
available without any further installation or configuration. Examples of 
core modules include http, fs, and path. You can use these modules by simply
 requiring them in your code using the require() function.

Local modules: These are modules that you create yourself and store 
in your own project directory. They are also sometimes called "custom modules".
 To use a local module, you first need to export it from the module file using the module.exports
  object, and then require it in your main application file using the require() function.

Third-party modules: These are modules that are created by other developers and made 
available for public use through the Node Package Manager (NPM). You can use third-party 
modules in your own applications by installing them using the npm install command, 
and then requiring them in your code using the require() function.

Third-party modules are typically published to the NPM registry, where they can be 
searched and downloaded by other developers. They can be very useful for adding new 
functionality to your application without having to write all the code yourself.

Node.js has a very active community of developers who create and maintain thousands 
of third-party modules, covering a wide range of functionality. 
Some popular third-party modules include express for building web applications, 
lodash for manipulating data, and moment for working with dates and times.

*/

// example.js
function add(a, b) {
  return a + b;
}

module.exports = add;


// app.js
const add = require('./modules_example');

console.log(add(2, 3)); // Output: 5


/* In the above example, we define a function add that takes two arguments
 and returns their sum. 
 We then export this function as a module using the module.exports object.

To use this module in another Node.js file, 
you would simply require it using the require function:
*/