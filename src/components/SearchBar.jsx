import { getMovies } from './api';
import { useState, useEffect } from 'react';
import MoviesGallery from './MoviesGallery';
import Movie from './Movie';

const Searchbar = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const data = getMovies();
      console.log(...data.results);
      setMovies(prevMovies => [...prevMovies, ...data.results]);
    };
    fetchImages();
  }, [setMovies]);

  return (
    <MoviesGallery>
      <Movie movies={movies} />
    </MoviesGallery>
  );
};

export default Searchbar;
