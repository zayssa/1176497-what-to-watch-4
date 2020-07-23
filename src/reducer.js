import {extend} from "./utils.js";
import films from './mocks/films.js';

const initialState = {
  genre: `All genres`,
  films
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
};

const ActionCreator = {
  setGenre: (payload) => ({
    type: ActionType.SET_GENRE,
    payload,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {genre: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
