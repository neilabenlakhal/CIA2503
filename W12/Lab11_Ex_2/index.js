const express = require('express');
const cookieSession = require('cookie-session'); // Import cookie-session
const path = require('path');

// Setup express app
const app = express();

app.use(express.urlencoded({ extended: true }));

// Configure cookie-session
app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'], // You can generate your own keys for better security
    maxAge: 24 * 60 * 60 * 1000, // Session duration in milliseconds (1 day in this example)
  })
);

// Basic route for homepage
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.post('/submit-data', function (req, res) {

  const newUser = {
    Name: req.body.Name,
    Amount: req.body.amount,
    CardNo: req.body.cardNo
  };
  req.session.userData = newUser; // Store data in session
  res.send('User data added to session');
});

// Route for getting user data from session
app.get('/getuser', (req, res) => {
  // Access user data from session
  const userData = req.session.userData || {};
  res.json(userData);
});

// Route for destroying session
app.get('/logout', (req, res) => {
  // Clear the session
  req.session = null;
  res.send('User logged out successfully');
});

// Server listens on port 5000
app.listen(5000, (err) => {
  if (err) throw err;
  console.log('Listening on port 5000');
});
