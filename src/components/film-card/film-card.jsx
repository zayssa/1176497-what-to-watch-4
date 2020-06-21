import React from "react";
import PropTypes from "prop-types";

const FilmCard = ({film, onTitleClick, onPosterHover}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image" onMouseEnter={() => {
        onPosterHover(film);
      }} onClick={onTitleClick}>
        <img src={film.poster} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" onClick={onTitleClick}>
        <a className="small-movie-card__link" href={`/films/${film.id}`}>{film.title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    bg: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.string.isRequired,
  }),
  onTitleClick: PropTypes.func.isRequired,
  onPosterHover: PropTypes.func.isRequired
};

export default FilmCard;
