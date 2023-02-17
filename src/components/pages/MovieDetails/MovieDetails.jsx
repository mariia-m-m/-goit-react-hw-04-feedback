import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../api';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const params = useParams();
  const { movieId } = params;

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getDetails(movieId);
      setMovie(data);
    };
    fetchDetails();
  });

  return <h1>{movie?.title}</h1>;
};

export default MovieDetails;
