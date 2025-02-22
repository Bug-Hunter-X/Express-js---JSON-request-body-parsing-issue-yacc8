const express = require('express');
const app = express();
app.use(express.json()); // Ensure this is before the route handler
app.post('/data', (req, res) => {
  if (!req.is('application/json')) {
    return res.status(400).json({ error: 'Invalid Content-Type' });
  }
  console.log(req.body);  
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));