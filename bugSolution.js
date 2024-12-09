const express = require('express');
const app = express();
app.get('/users/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    // ... database operation using async/await ...
    if (!userData) {
      const error = new Error('User not found');
      error.status = 404;
      throw error; 
    }
    res.send(userData);
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
});

// ... other routes ...

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Something broke!');
});