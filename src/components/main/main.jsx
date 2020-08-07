import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/reducer";
import {getGenre} from "../../reducer/selectors";

import SiteHeader from "../site-header/site-header.jsx";
import FilmsList from "../films-list/films-list.jsx";
import {GenresList} from "../genres-list/genres-list.jsx";
import withPage from "../hocs/with-page/with-page.jsx";
import withActiveItem from "../hocs/with-active-item/with-active-item.jsx";
import {SiteFooter} from "../site-footer/site-footer.jsx";
import HeaderMovie from "../header-movie/header-movie.jsx";

import {IFilm} from "../../types/film";

const Main = ({activeItem, films, onFilmTitleClick, currentGenre, setGenre, onPlay}) => {

  const genres = Array.from(new Set(films.map((film) => (film.genre))));
  genres.unshift(`All genres`);

  const FilmsListWrapped = withActiveItem(withPage(FilmsList));

  return (
    <>
      <div className="visually-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><symbol id="add" viewBox="0 0 19 20">
          <title>+</title>
          <desc>Created with Sketch.</desc>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859" />
          </g>
        </symbol><symbol id="full-screen" viewBox="0 0 27 27">
          <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
          <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
          <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
          <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
        </symbol><symbol id="in-list" viewBox="0 0 18 14">
          <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5" />
        </symbol><symbol id="pause" viewBox="0 0 14 21">
          <title>Artboard</title>
          <desc>Created with Sketch.</desc>
          <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21" />
            <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21" />
          </g>
        </symbol></svg>
      </div>

      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={activeItem.bg} alt={activeItem.title} />
        </div>

        <SiteHeader />

        <HeaderMovie film={activeItem} onPlay={onPlay} />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres} currentGenre={currentGenre} setGenre={setGenre} />

          <FilmsListWrapped
            films={films}
            onMainPage
            genre={currentGenre !== `All genres` ? currentGenre : undefined}
            onFilmTitleClick={onFilmTitleClick}
          />
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

Main.propTypes = {
  activeItem: IFilm,
  films: PropTypes.arrayOf(
      IFilm
  ).isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  setGenre: PropTypes.func.isRequired,
  onPlay: PropTypes.func
};

const mapStateToProps = (state) => ({
  currentGenre: getGenre(state)
});

const mapDispatchToProps = (dispatch) => ({
  setGenre(genre) {
    dispatch(ActionCreator.setGenre(genre));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

