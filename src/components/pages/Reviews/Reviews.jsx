import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/api';
import { nanoid } from 'nanoid';

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
    <li key={nanoid(3)}>
      <p>{content}</p>
    </li>
  ));

  return <ol>{elements}</ol>;
};

export default Reviews;
