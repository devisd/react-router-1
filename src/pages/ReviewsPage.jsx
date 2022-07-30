import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOnMovieReviews } from '../services/movies-api';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchOnMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (reviews.length !== 0) {
    return (
      <div>
        <h2>Reviews</h2>
        <ul>
          {reviews.map(el => (
            <li key={el.id}>
              <h3>
                {el.author} ({el.author_details.username})
              </h3>
              <p>{el.content}</p>
              <a href={el.url}>{el.url}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Reviews</h2>
        <h2>Sorry, but there are no reviews yet</h2>
      </div>
    );
  }
};

export default ReviewsPage;
