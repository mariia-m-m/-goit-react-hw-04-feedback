import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Cast from './pages/Cast/Cast';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Reviews from './pages/Reviews/Reviews';
import NotFound from './pages/NotFound';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
