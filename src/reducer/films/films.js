import {extend} from "../../utils/extend";
import {adaptFilm, adaptFilmsList} from "../../utils/adapter-film";

const initialState = {
  films: [],
  comments: {}
};

const ActionType = {
  GET_FILMS: `GET_FILMS`,
  TOGGLE_FAVORITE: `TOGGLE_FAVORITE`,
  ADD_COMMENT: `ADD_COMMENT`
};

const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films
  }),
  toggleFavorite: (film) => ({
    type: ActionType.TOGGLE_FAVORITE,
    payload: film
  }),
  addComment: (filmId, comments) => ({
    type: ActionType.ADD_COMMENT,
    payload: {filmId, comments}
  })
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(adaptFilmsList(response.data)));
      });
  },
  toggleFavorite: (filmId) => (dispatch, getState, api) => {
    const currentStatus = getState()[`FILMS`].films.find((film) => film.id === filmId).isFavorite;
    return api.post(`/favorite/${filmId}/${currentStatus ? 0 : 1}`)
      .then((response) => {
        dispatch(ActionCreator.toggleFavorite(adaptFilm(response.data)));
      });
  },
  addComment: (filmId, comment) => (dispatch, getState, api) => {
    return api.post(`/comments/${filmId}`, {body: comment})
      .then((response) => {
        dispatch(ActionCreator.addComment(filmId, response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS:
      const comments = {};
      action.payload.forEach((film) => {
        comments[film.id] = [];
      });
      return extend(state, {films: action.payload, comments});
    case ActionType.TOGGLE_FAVORITE:
      return extend(state, {films: state.films.map((film) => (
        film.id === action.payload.id ? action.payload : film
      ))});
    case ActionType.ADD_COMMENT:
      return extend(
          state, {
            comments: extend(
                state.comments, {
                  [action.payload.filmId]: action.payload.comments
                }
            )
          }
      );
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
