import {createSelector} from "reselect";
import {REDUCERS} from "./reducer";

export const getFilms = (state) => {
  return state[REDUCERS.FILMS].films;
};

export const getGenre = (state) => {
  return state[REDUCERS.CURRENT_GENRE].currentGenre;
};

export const filmsByGenre = createSelector(
    getFilms,
    getGenre,
    (films, genre) => {
      return genre === `All genres` ? films : films.filter((film) => film.genre === genre);
    }
);
