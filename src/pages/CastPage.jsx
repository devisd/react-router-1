import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOnMovieCast } from '../services/movies-api';

const CastPage = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    fetchOnMovieCast(movieId).then(setCasts);
  }, [movieId]);

  if (casts.length !== 0) {
    return (
      <div>
        <h2>Cast</h2>
        <ul>
          {casts.map(el => (
            <li key={el.id}>
              {/* <img
                src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                alt={el.name}
                width="50"
              /> */}

              <h3>{el.name}</h3>
              <p>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Cast</h2>
        <h2>Sorry, no cast information</h2>
      </div>
    );
  }
};

export default CastPage;
