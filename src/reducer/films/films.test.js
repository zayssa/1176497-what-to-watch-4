import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {reducer, ActionType, Operation} from "./films";
import {films, comments} from "../../mocks/films";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
    comments: {},
    promoFilm: {}
  });
});

it(`Reducer should update films list by load films`, () => {
  expect(reducer({
    films: [],
    comments: {},
    promoFilm: {}
  }, {
    type: ActionType.GET_FILMS,
    payload: films,
  })).toEqual({
    films,
    comments,
    promoFilm: {}
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });
});
