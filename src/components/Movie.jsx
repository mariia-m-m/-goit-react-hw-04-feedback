import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { Link, useLocation } from 'react-router-dom';

const Movie = ({ movies }) => {
  const location = useLocation();
  const elements = movies.map(({ id, title, poster_path }) => (
    <Link
      className={styles.link}
      state={{ from: location }}
      to={`movies/${id}`}
      key={id}
    >
      <li className={styles.item}>
        <p className={styles.filmName}>{title}</p>
        <img
          src={
            poster_path
              ? 'https://image.tmdb.org/t/p/w500' + poster_path
              : 'https://drudesk.com/sites/default/files/styles/blog_page_header_1088x520/public/2018-02/404-error-page-not-found.jpg?itok=YW-iShwf'
          }
          alt={movies?.title}
          width={100}
        />
      </li>
    </Link>
  ));
  return elements;
};

export default Movie;

Movie.defaultProps = {
  movies: [],
};

Movie.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
