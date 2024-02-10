const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors'); // Add this line
require('dotenv').config(); // Add this line to load environment variables from .env file

const url = process.env.MONGO_URL;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

const app = express();
const corsOpts = {
  origin: '*',
  credentials: true,
  methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
  allowedHeaders: ['Content-Type'],
  exposedHeaders: ['Content-Type']
};

app.use(cors(corsOpts));


app.get('/sampledata', async (req, res) => {
  try {
    const database = client.db('Sampledata'); // Use environment variable for database name
    const collection = database.collection('Data');
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  connect();
});
