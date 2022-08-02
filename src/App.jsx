import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() =>
  import('./components/Layout/Layout' /* webpackChunkName: "layout" */)
);

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movies-page-details" */
  )
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "not-found-page" */)
);
const CastPage = lazy(() =>
  import('./pages/CastPage' /* webpackChunkName: "cast-page" */)
);
const ReviewsPage = lazy(() =>
  import('./pages/ReviewsPage' /* webpackChunkName: "reviews-page" */)
);

const Loader = lazy(() =>
  import('./components/Loader/Loader' /* webpackChunkName: "loader" */)
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
