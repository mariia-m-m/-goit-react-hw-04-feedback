import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'components/api';
import { nanoid } from 'nanoid';
import styles from '../../styles.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const data = await getActors(movieId);
        setActors(data.cast);
      } catch (response) {
        console.log(response.data.message);
      }
    };
    fetchActors();
  }, []);

  const elements = actors.map(({ name, profile_path }) => (
    <li className={styles.itemList} key={nanoid(3)}>
      <p>{name}</p>
      <p>
        <img
          src={
            profile_path
              ? 'https://image.tmdb.org/t/p/w500' + profile_path
              : 'https://drudesk.com/sites/default/files/styles/blog_page_header_1088x520/public/2018-02/404-error-page-not-found.jpg?itok=YW-iShwf'
          }
          width="100"
        />
      </p>
    </li>
  ));

  return <ol className={styles.block}>{elements}</ol>;
};

export default Cast;
