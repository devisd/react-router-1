import { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { fetchOnMovieDetails } from '../services/movies-api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchOnMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const goBack = location?.state?.from ?? '/';

  return (
    <>
      <Link to={goBack}>Go back</Link>
      <Link to={'/'}>Go Homepage</Link>

      {movie && (
        <div>
          {/* <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="320"
          /> */}
          <div>
            <h2>{movie.title}</h2>
            <ul>
              Genres:
              {movie.genres.map(el => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <p>Release date: {movie.release_date}</p>
            <a href={movie.homepage}>{movie.homepage}</a>
            <br />
            <NavLink to={'cast'} state={{ from: location.state.from }}>
              Cast
            </NavLink>
            <NavLink to={'reviews'} state={{ from: location.state.from }}>
              Rewiew
            </NavLink>
          </div>
        </div>
      )}
      <hr />
      <Suspense fallback={<h3>Loading content ...</h3>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
