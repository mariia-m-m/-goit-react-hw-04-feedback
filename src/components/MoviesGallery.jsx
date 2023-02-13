import PropTypes from 'prop-types';

import styles from './styles.module.css';

const MoviesGallery = ({ children }) => {
  return <ul>{children}</ul>;
};

export default MoviesGallery;

// ImageGallery.propTypes = {
//   children: PropTypes.element.isRequired,
// };
