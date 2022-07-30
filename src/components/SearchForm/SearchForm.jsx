import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

const SearchForm = ({ movieQuery, onSubmit }) => {
  let [searchQuery, setQuery] = useState(movieQuery);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const handleChange = e => {
    setQuery(e.target.value);

    if (searchQuery) {
      setSearchParams({ query: e.target.value });
    } else {
      setSearchParams('');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    // setSearchParams('');
    // setQuery('');
  };

  return (
    <div className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm_button}>
          <span className={css.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={css.SearchForm_input}
          value={searchQuery}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          placeholder="search..."
        />
      </form>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
