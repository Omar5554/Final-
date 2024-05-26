const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let albums = [
  {
    id: 1,
    artist: 'The Beatles',
    title: 'Abbey Road',
    year: 1969,
    genre: 'Rock'
  },
  {
    id: 2,
    artist: 'Pink Floyd',
    title: 'The Dark Side of the Moon',
    year: 1973,
    genre: 'Progressive Rock'
  },
  {
    id: 3,
    artist: 'Michael Jackson',
    title: 'Thriller',
    year: 1982,
    genre: 'Pop'
  }
];

let nextId = 4; // Start with the next available ID

// Endpoint for home
app.get('/', (req, res) => {
  res.json({ info: 'This is a Node/Express App' });
});

// CREATE - allow a user to create a new album in our list
app.post('/albums', (req, res) => {
  const { artist, title, year, genre } = req.body;

  if (artist && title) {
    const newAlbum = { id: nextId++, artist, title, year, genre };
    albums.push(newAlbum);
    console.log(`Creating a new album: ${title} by ${artist}`);
    res.json(newAlbum);
  } else {
    console.log('Error creating album!');
    res.status(400).send('Error creating album! Albums need a title and an artist.');
  }
});

// READ - allow a user to read a list of our data
app.get('/albums', (req, res) => {
  res.json(albums);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
