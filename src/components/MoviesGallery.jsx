import PropTypes from 'prop-types';

import styles from './styles.module.css';

const MoviesGallery = ({ children }) => {
  return (
    <div>
      <ul className={styles.block}>{children}</ul>
    </div>
  );
};

export default MoviesGallery;

MoviesGallery.propTypes = {
  children: PropTypes.element.isRequired,
};
