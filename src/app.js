const express = require('express');
const cardController = require('./controllers/cardController');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'API çalışıyor' });
});

// Routes
app.post('/api/generate-card', cardController.generateCard);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 