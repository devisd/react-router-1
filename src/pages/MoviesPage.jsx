import { useState, useEffect, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import SearchForm from 'components/SearchForm';
// import Loader from 'components/Loader';
import { fetchOnSearchMovies } from '../services/movies-api';

const SearchForm = lazy(() => import('../components/SearchForm'));
// const Loader = lazy(() => import('../components/Loader'));

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const searchMovie = () => {
      setStatus('pending');
      fetchOnSearchMovies(searchQuery).then(result => {
        setMovies(result);
        setStatus('resolved');
        console.log(result);
      });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };

    searchMovie();
  }, [searchQuery]);

  const handleInputChange = query => {
    setSearchQuery(query);
    setMovies(null);
  };

  return (
    <>
      <SearchForm movieQuery={searchQuery} onSubmit={handleInputChange} />
      {status === 'idle' && <h2>Enter movie title to search</h2>}
      {status === 'pending' && <h2>Loading...</h2>}
      <ul>
        {status === 'resolved' &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
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

export default MoviesPage;
