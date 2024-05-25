import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAlbums = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/albums');
      const data = await response.json();
      setAlbums(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  const createAlbum = async (album) => {
    try {
      const response = await fetch('http://localhost:3000/albums', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(album),
      });
      const newAlbum = await response.json();
      setAlbums([...albums, newAlbum]);
    } catch (error) {
      console.error('Error creating album:', error);
    }
  };

  useEffect(() => {
    getAlbums();
  }, []);

  const renderAlbums = () => {
    if (albums.length === 0) {
      return <div>No albums found!</div>;
    }
    return albums.map((album) => (
      <div key={album.id}>
        <h2>{album.title}</h2>
        <h3>{album.artist}</h3>
        <p>Year: {album.year}</p>
        <p>Genre: {album.genre}</p>
      </div>
    ));
  };

  return (
    <div>
      <h1>Welcome to the Music Store</h1>
      <Form onSubmit={createAlbum} />
      {loading ? <div>Loading...</div> : renderAlbums()}
    </div>
  );
}

export default App;