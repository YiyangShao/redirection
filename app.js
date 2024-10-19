const express = require('express');
const fs = require('fs');
const app = express();

// Middleware to log access time and IP address
app.use((req, res, next) => {
  const log = `Time: ${new Date().toISOString()}, IP: ${req.ip}\n`;
  fs.appendFileSync('access.log', log);
  next();
});

// Define the root route that performs redirection
app.get('/', (req, res) => {
  res.redirect('https://yiyangshao.github.io/');  // Replace with your destination URL
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
