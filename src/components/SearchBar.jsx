import { getMovies } from './api';
import { useState, useEffect } from 'react';
import MoviesGallery from './MoviesGallery';
import Movie from './Movie';

const Searchbar = () => {
  const [movies, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const data = getMovies(search, page);
      console.log(data);
      setImages(prevImages => [...prevImages, ...data]);
    };
    fetchImages();
  }, [search, page, setLoading, setImages, setError]);

  return (
    <MoviesGallery>
      <Movie movies={movies} />
    </MoviesGallery>
  );
};

export default Searchbar;
