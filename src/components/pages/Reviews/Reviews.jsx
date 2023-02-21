import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/api';
import { nanoid } from 'nanoid';
import styles from '../../styles.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const data = await getReviews(movieId);
        setReviews(data.results);
      } catch (response) {
        console.log(response.data.message);
      }
    };
    fetchActors();
  }, []);

  const elements = reviews.map(({ content }) => (
    <li key={nanoid(3)} className={styles.itemList}>
      <p>{content ? content : 'There no reviews fot that film'}</p>
    </li>
  ));

  return <ol className={styles.block}>{elements}</ol>;
};

export default Reviews;
