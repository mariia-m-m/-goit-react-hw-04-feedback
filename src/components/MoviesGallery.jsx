import PropTypes from 'prop-types';

import styles from './styles.module.css';

const MoviesGallery = ({ children }) => {
  return (
    <div className={styles.block}>
      <ol className={styles.list}>{children}</ol>
    </div>
  );
};

export default MoviesGallery;

MoviesGallery.propTypes = {
  children: PropTypes.element.isRequired,
};
