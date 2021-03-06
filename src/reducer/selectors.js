import {createSelector} from "reselect";
import {REDUCERS} from "./reducer";

export const getFilms = (state) => {
  return state[REDUCERS.FILMS].films;
};

export const getPromoFilm = (state) => {
  return state[REDUCERS.FILMS].promoFilm;
};

export const getGenre = (state) => {
  return state[REDUCERS.CURRENT_GENRE].currentGenre;
};

export const getAuthStatus = (state) => {
  return state[REDUCERS.USER].authorizationStatus;
};

export const getUserInfo = (state) => {
  return state[REDUCERS.USER].userInfo;
};

export const filmsByGenre = createSelector(
    getFilms,
    getGenre,
    (films, genre) => {
      return genre === `All genres` ? films : films.filter((film) => film.genre === genre);
    }
);
