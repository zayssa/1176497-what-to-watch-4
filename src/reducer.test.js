import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {films} from './mocks/films';
import {extend} from './utils';

const initialState = {
  genre: `All genres`,
  films
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Reducer should set genre by payload`, () => {
  expect(reducer(
      extend({}, initialState),
      {
        type: ActionType.SET_GENRE,
        payload: `test 1`,
      }
  )).toEqual(extend(initialState, {
    genre: `test 1`,
  }));
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting genre returns correct action`, () => {
    expect(ActionCreator.setGenre(`test 2`)).toEqual({
      type: ActionType.SET_GENRE,
      payload: `test 2`,
    });
  });
});
