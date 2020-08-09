import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import MyList from "./my-list.jsx";
import history from "../../history";
import {createAPI} from "../../api";
import {films} from "../../mocks/films";

const api = createAPI();

it(`Render MyList`, () => {
  const tree = renderer
    .create(<Router history={history}><MyList
      filmsList={films.slice(0, 5)}
      userInfo={{
        "id": 1,
        "email": `qwe@mail.ru`,
        "name": `123456`,
        "avatar_url": `img/avatar.png`
      }}
      api={api}
    /></Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
