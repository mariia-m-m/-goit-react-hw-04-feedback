import { useState, useEffect, useCallback } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { getDetails } from '../../api';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const params = useParams();
  const { movieId } = params;

  const location = useLocation();
  // const { from } = location.state;-працює,але не якщо локально відкрити сторінку
  const from = location.state?.from || '/';

  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(location.state.from);
  }, [navigate]);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getDetails(movieId);
      setMovie(data);
    };
    fetchDetails();
  }, [setMovie]);

  return (
    <>
      <button onClick={goBack}>Go back</button>
      <h1>{movie?.title}</h1>
      <Link to="cast" state={{ from }}>
        Cast
      </Link>
      <Link to="reviews" state={{ from }}>
        Reviews
      </Link>
      <Outlet />
    </>
  );
};

export default MovieDetails;
