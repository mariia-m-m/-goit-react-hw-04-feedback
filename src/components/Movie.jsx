import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Movie = ({ movies, showMovie }) => {
  const elements = movies.map(({ id, title }) => (
    <li key={id}>
      <h1>{title}</h1>
    </li>
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
