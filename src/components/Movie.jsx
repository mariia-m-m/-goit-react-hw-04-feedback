// import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Movie = ({ movies }) => {
  const elements = movies.map(({ id, title }) => (
    <Link className={styles.link} to={`movies/${id}`} key={id}>
      <li>
        <h1>{title}</h1>
      </li>
    </Link>
  ));
  return elements;
};

export default Movie;

// ImageGalleryItem.defaultProps = {
//   images: [],
// };

// ImageGalleryItem.propTypes = {
//   showImage: PropTypes.func.isRequired,
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     })
//   ),
// };
