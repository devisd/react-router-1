import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchOnTrending } from '../services/movies-api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchOnTrending().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trends of the week</h1>

      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {/* <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="320"
                /> */}
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HomePage;
