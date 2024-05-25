const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON data on the server
app.use(express.json());

// Endpoint for home
app.get('/', (req, res) => {
  res.json({ info: 'This is a Node/Express App' });
});

// CREATE - allow a user to create a new album in our list
app.post('/albums', (req, res) => {
  // Analyze the request body for data sent by the client
  let { artist, title, year, genre } = req.body;

  if (artist && title) {
    console.log(`Creating a new album: ${title} by ${artist}`);
    res.json({ id: 1, title, artist, year, genre });
  } else {
    console.log('Error creating album!');
    res.status(400).send('Error creating album! Albums need a title and an artist.');
  }
});

// READ - allow a user to read a list of our data
app.get('/albums', (req, res) => {
  let data = [
    {
      artist: 'The Beatles',
      title: 'Abbey Road',
      year: 1969,
      genre: 'Rock'
    },
    {
      artist: 'Pink Floyd',
      title: 'The Dark Side of the Moon',
      year: 1973,
      genre: 'Progressive Rock'
    },
    {
      artist: 'Michael Jackson',
      title: 'Thriller',
      year: 1982,
      genre: 'Pop'
    }
  ];

  res.json(data);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});