import Searchbar from 'components/Searchbar';
import { getMoviesSearch } from 'components/api';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesGallery from 'components/MoviesGallery';
import MovieSearch from 'components/MovieSearch';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  const searchMovies = useCallback(({ search }) => {
    setSearchParams({ search, page: 1 });
    setMovies([]);
  }, []);

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const data = await getMoviesSearch(search, page);
        setMovies([...data.results]);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies();
  }, [search, page]);

  const loadMore = useCallback(() => {
    setSearchParams({ search, page: Number(page) + 1 });
  });

  return (
    <>
      <Searchbar onSubmit={searchMovies} />
      <MoviesGallery>
        <MovieSearch movies={movies} />
      </MoviesGallery>
      {page > 0 ? (
        <button onClick={loadMore}>LoadMore</button>
      ) : (
        <p>Wait for search...</p>
      )}
    </>
  );
};

export default Movies;
