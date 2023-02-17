import { getMovies } from './api';
import { useState, useEffect } from 'react';
import MoviesGallery from './MoviesGallery';
import Movie from './Movie';

const Searchbar = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const data = await getMovies();
      setMovies(prevMovies => [...data.results]);
    };
    fetchList();
  }, [setMovies]);

  return (
    <MoviesGallery>
      <Movie movies={movies} />
    </MoviesGallery>
  );
};

export default Searchbar;
