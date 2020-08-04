import {extend} from "../../utils/extend";

export const ActionType = {
  SET_GENRE: `SET_GENRE`,
};

const ALL_GENRE = `All genres`;

const initialState = {
  currentGenre: ALL_GENRE,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {currentGenre: action.payload});
    default:
      return state;
  }
};
