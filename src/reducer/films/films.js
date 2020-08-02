import {extend} from "../../utils/extend";
import {adaptFilmsList} from "../../utils/adapter-film";

const initialState = {
  films: []
};

const ActionType = {
  GET_FILMS: `GET_FILMS`
};

const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films
  })
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(adaptFilmsList(response.data)));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS:
      return extend(state, {films: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
