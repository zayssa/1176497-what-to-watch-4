import React from "react";
import {getTextRating} from "../../utils/get-text-rating.js";
import {IFilm} from "../../types/film";

const OverviewTab = ({film}) => {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getTextRating(film.rating)}</span>
          <span className="movie-rating__count">{film.count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.text}</p>

        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.actors}</strong></p>
      </div>
    </>
  );
};
OverviewTab.propTypes = {
  film: IFilm.isRequired
};

export default OverviewTab;
