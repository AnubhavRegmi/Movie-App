import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from './components/Card/Card'
function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  // const handleSearchButtonClick = () => {
  //   // Check if movies array is available
  //   if (movies && movies.length > 0) {
  //     // Perform the search based on the entered term
  //     const filteredMovies = movies.filter(movie => {
  //       const movieTitle = movie.title.toLowerCase();
  //       const movieActor = movie.actor.toLowerCase();
  //       const movieGenre = movie.genre.toLowerCase();
  //       const searchTermLower = searchTerm.toLowerCase();

  //       return (
  //         movieTitle.includes(searchTermLower) ||
  //         movieActor.includes(searchTermLower) ||
  //         movieGenre.includes(searchTermLower)
  //       );
  //     });

  //     // Update the state with the filtered movies
  //     setMovies(filteredMovies);
  //   }
  // };

  
  const getMovies = async () => {


    try {
      const { data } = await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
      setMovies(data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <header className='header'>
        <h1 className='heading1'>
          Movies
        </h1>
      </header>
       {/* <form className="button">
        <input
          type="text"
          placeholder="Enter a movie, genre"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        
        <button className="but" type="button" onClick={handleSearchButtonClick}>
          Search
        </button>
      </form> */}
      
      <main className='main'>
        {movies && movies.length > 0 && movies.map(movie => <Card key={movie.id} movie={movie} />)}
      </main>
    </div>
  );
}

export default App;
