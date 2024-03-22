
/*Overall, this code sets up a basic server using Express,
defines two routes (one for GET and one for POST), 
and listens for incoming requests on port 5000. 
The GET route serves an HTML file, and the POST route 
retrieves data from the request body and sends a response.
*/

/* imports the required modules: 
express, body-parser, and path. 
creates an instance of the express application 
and assigns it to the variable app.
*/

var express = require('express'); //third party module
var bodyParser = require("body-parser");////third party module
const path = require('path'); // use the pre-installed path module
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));

//Here, the code sets up body-parser middleware 
//to parse the URL-encoded data sent in the request body.


app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    res.send(name + ' Submitted Successfully!');

/* This code defines a route for the URL "/submit-student-data" 
using the HTTP POST method. When a POST request is made to this URL,
 it retrieves the firstName and lastName fields from 
 the request body and concatenates them into a name variable.
  It then sends a response with the concatenated name and 
  the message "Submitted Successfully!".
*/

});
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
