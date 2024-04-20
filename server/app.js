const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json()); // for parsing application/json

//Setting up Basic Express Server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Connection to MongoDB Atlas
mongoose.connect('your-mongodb-atlas-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.error('MongoDB connection failed:', error.message);
});
