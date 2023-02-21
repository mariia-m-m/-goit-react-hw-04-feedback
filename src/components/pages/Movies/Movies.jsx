import styles from '../../styles.module.css';
import { getMoviesSearch } from 'components/api';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesGallery from 'components/MoviesGallery';
import MovieSearch from 'components/MovieSearch';
import Searchbar from './Searchbar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  const searchMovies = useCallback(
    ({ search }) => {
      setSearchParams({ search, page: 1 });
      setMovies([]);
    },
    [setSearchParams, setMovies]
  );

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const data = await getMoviesSearch(search, page);
        setMovies([...data.results]);
      } catch (response) {
        console.log(response.data.message);
      }
    };
    fetchMovies();
  }, [search, page]);

  const loadMore = useCallback(() => {
    setSearchParams({ search, page: Number(page) + 1 });
  }, [setSearchParams, page, search]);

  return (
    <>
      <Searchbar onSubmit={searchMovies} />
      <MoviesGallery>
        <MovieSearch movies={movies} />
      </MoviesGallery>
      {page > 0 ? (
        <button onClick={loadMore} className={styles.loadButton}>
          LoadMore
        </button>
      ) : (
        <p>Wait for search...</p>
      )}
    </>
  );
};

export default Movies;
