import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './Navbar/Navbar';
import Cast from './pages/Cast/Cast';
const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        color: '#010101',
      }}
    >
      <Navbar />
      <Suspense>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
