// Importing modules
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//body-parser for handling JSON and URL-encoded data
const bodyParser = require("body-parser");

//Configuring express to use body-parser as middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://g00412122:123456789@cluster0.xekel25.mongodb.net/?retryWrites=true&w=majority');
}

// Define the schema for the 'animes_of_mine' collection
const animeSchema = new mongoose.Schema({
  title: String,
  cover: String,
  description: String,
  date: String
});

// Create a model based on the schema
const animeModel = mongoose.model('animes_of_mine', animeSchema);

//delete request a anime by ID
app.delete('/api/anime/:id', async (req, res) => {
  console.log("Delete: " + req.params.id);

  let anime = await animeModel.findByIdAndDelete(req.params.id);
  res.send(anime);
});

// PUT request anime by ID
app.put('/api/anime/:id', async(req, res) => {
  console.log("Update: " + req.params.id);

  let anime = await animeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(anime);
});

// POST endpoint to create a new anime
app.post('/api/anime', (req, res) => {
  console.log(req.body);

  animeModel.create({
    location: req.body.location,
    cover: req.body.cover,
    description: req.body.description,
    date: req.body.date
  })
  .then(() => { res.send("anime Created"); })
  .catch(() => { res.send("anime NOT Created"); });

});

// GET endpoint to retrieve all animes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/animes', async(req, res) => {
  let animes = await animeModel.find({});
  res.json(animes);
});

app.get('/api/anime/:identifier', async (req, res) => {
  console.log(req.params.identifier);

  let anime = await animeModel.findById(req.params.identifier);
  res.send(anime);
});

// Start the server
app.listen(port, () => {
  console.log(`anime App listening on port ${port}`);
});