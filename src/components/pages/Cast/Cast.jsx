import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'components/api';
import { nanoid } from 'nanoid';

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

  const elements = actors.map(({ id, name }) => (
    <li key={nanoid(3)}>
      <p>{name}</p>
    </li>
  ));

  return <ol>{elements}</ol>;
};

export default Cast;
