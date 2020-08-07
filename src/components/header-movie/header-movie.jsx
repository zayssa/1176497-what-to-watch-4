import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Operation as FilmOperation} from "../../reducer/films/films";
import {getAuthStatus} from "../../reducer/selectors";
import {IFilm} from "../../types/film";

const HeaderMovie = ({film, onPlay, authorizationStatus, toggleFavorite}) => {
  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={film.poster} alt={`${film.title} poster`} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{film.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{film.genre}</span>
            <span className="movie-card__year">{film.year}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button" onClick={onPlay}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>
            {authorizationStatus === `AUTH` ? (
              <button className="btn btn--list movie-card__button" type="button" onClick={() => toggleFavorite(film.id)}>
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref={film.isFavorite ? `#in-list` : `#add`} />
                </svg>
                <span>My list</span>
              </button>
            ) : (
              <Link className="btn btn--list movie-card__button" to="/login">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add" />
                </svg>
                <span>My list</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderMovie.propTypes = {
  film: IFilm,
  onPlay: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite(filmId) {
    dispatch(FilmOperation.toggleFavorite(filmId));
  }
});

export {HeaderMovie};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderMovie);
