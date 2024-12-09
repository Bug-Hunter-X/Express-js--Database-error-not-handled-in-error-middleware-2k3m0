const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data ...
  if (!userData) {
    return res.status(404).send('User not found'); // Correct approach
  }
  res.send(userData);
});

// ... other routes ...

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});