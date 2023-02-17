// import PropTypes from 'prop-types';

import styles from './styles.module.css';

const MoviesGallery = ({ children }) => {
  return (
    <div className={styles.block}>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};

export default MoviesGallery;

// ImageGallery.propTypes = {
//   children: PropTypes.element.isRequired,
// };
