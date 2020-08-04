import {combineReducers} from "redux";
import {reducer as currentGenre} from "./current-genre/current-genre.js";
import {reducer as films} from "./films/films.js";
import {reducer as user} from "./user/user.js";

export const REDUCERS = {
  FILMS: `FILMS`,
  CURRENT_GENRE: `CURRENT_GENRE`,
  USER: `USER`,
};

export const ActionCreator = {
  setGenre: (genre) => ({
    type: `SET_GENRE`,
    payload: genre,
  }),
};

export const reducers = combineReducers({
  [REDUCERS.CURRENT_GENRE]: currentGenre,
  [REDUCERS.FILMS]: films,
  [REDUCERS.USER]: user,
});
