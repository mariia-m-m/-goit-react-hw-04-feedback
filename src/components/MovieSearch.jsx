import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieSearch = ({ movies }) => {
  const location = useLocation();
  const elements = movies.map(({ id, title }) => (
    <Link
      className={styles.link}
      state={{ from: location }}
      to={`${id}`}
      key={id}
    >
      <li>
        <h1>{title}</h1>
      </li>
    </Link>
  ));
  return elements;
};

export default MovieSearch;
