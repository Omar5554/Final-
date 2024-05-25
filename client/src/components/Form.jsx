import { useState } from 'react';

function Form({ onSubmit }) {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ artist, title, year, genre });
    setArtist('');
    setTitle('');
    setYear('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add an album</h1>
      <label>
        Artist:
        <input type="text" value={artist} onChange={handleArtistChange} />
      </label>
      <br />
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Year:
        <input type="text" value={year} onChange={handleYearChange} />
      </label>
      <br />
      <label>
        Genre:
        <input type="text" value={genre} onChange={handleGenreChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;