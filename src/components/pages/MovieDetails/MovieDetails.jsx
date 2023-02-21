import { useState, useEffect, useCallback } from 'react';
import styles from '../../styles.module.css';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { getDetails } from '../../api';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const params = useParams();
  const { movieId } = params;

  const location = useLocation();
  // const { from } = location.state;-працює,але не якщо локально відкрити сторінку
  const from = location.state?.from || '/';

  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(location.state.from);
  }, [location.state.from, navigate]);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getDetails(movieId);
      setMovie(data);
    };
    fetchDetails();
  }, [setMovie, movieId]);
  const genres = movie?.genres.map(({ id, name }) => <li key={id}>{name}</li>);
  return (
    <div>
      <button onClick={goBack} className={styles.loadButton}>
        Go back
      </button>
      <h1>{movie?.title}</h1>
      <div className={styles.boxDetails}>
        <div>
          <img
            src={
              movie?.poster_path
                ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                : 'https://drudesk.com/sites/default/files/styles/blog_page_header_1088x520/public/2018-02/404-error-page-not-found.jpg?itok=YW-iShwf'
            }
            alt={movie?.title}
            width={250}
          />
        </div>
        <div>
          <p className={styles.title}>Popularity:</p>
          <p>{movie?.popularity}</p>
          <p className={styles.title}>Overview:</p>
          <p>{movie?.overview}</p>
          <p className={styles.title}>Genres:</p>
          <p>{genres}</p>
        </div>
      </div>

      <h2 className={styles.title}>Additional Information:</h2>
      <ul>
        <li>
          <Link to="cast" state={{ from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from }}>
            Reviews
          </Link>
        </li>
        <Outlet />
      </ul>
    </div>
  );
};

export default MovieDetails;
