import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Tabs from "../tabs/tabs.jsx";
import FilmsList from "../films-list/films-list.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import SiteHeader from "../site-header/site-header.jsx";
import {SiteFooter} from "../site-footer/site-footer.jsx";
import {Operation as FilmOperation} from "../../reducer/films/films";
import {getAuthStatus} from "../../reducer/selectors";

import {IFilm} from "../../types/film";
import {IUser} from "../../types/user";


const MoviePage = ({films, history, api, match, authorizationStatus, toggleFavorite, userInfo}) => {
  const TabsWrapped = withActiveItem(Tabs);
  const film = films.find((item) => item.id.toString() === match.params.filmId);

  return (
    <>
      <div className="visually-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <symbol id="add" viewBox="0 0 19 20">
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"/>
            </g>
          </symbol>
          <symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
          </symbol>
          <symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5"/>
          </symbol>
          <symbol id="pause" viewBox="0 0 14 21">
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"/>
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"/>
            </g>
          </symbol>
        </svg>
      </div>

      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.bg} alt={film.title} />
          </div>

          <SiteHeader userInfo={userInfo} />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(`/player/${film.id}`)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
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
                <Link to={`/films/${film.id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.poster} alt={`${film.title} poster`} width="218" height="327" />
            </div>

            <TabsWrapped film={film} api={api} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList
            films={films}
            genre={film.genre}
          />
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

MoviePage.propTypes = {
  match: PropTypes.any,
  films: PropTypes.arrayOf(
      IFilm
  ),
  api: PropTypes.any.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  userInfo: IUser,
  history: PropTypes.any
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite(filmId) {
    dispatch(FilmOperation.toggleFavorite(filmId));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
