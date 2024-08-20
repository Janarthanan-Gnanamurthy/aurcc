const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// In-memory user store (for demonstration purposes only)
const users = {
  'admin': 'password123'  // username: password
};

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Login endpoint
app.post('/login', (req, res) => {
  console.log('Request Body:', req.body);
  const { username, password } = req.body;

  if (users[username] && users[username] === password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
