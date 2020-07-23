import React from "react";
import PropTypes from "prop-types";

export const GenresList = ({genres, currentGenre, setGenre}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genresOne) => (
        <li className={`catalog__genres-item ${genresOne === currentGenre ? `catalog__genres-item--active` : ``}`} key={`genres-${genresOne}`}>
          <a href="#" onClick={() => setGenre(genresOne)} className="catalog__genres-link">{genresOne}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGenre: PropTypes.string.isRequired,
  setGenre: PropTypes.func.isRequired
};
