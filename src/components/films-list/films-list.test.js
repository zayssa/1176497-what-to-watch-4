import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

it(`Render FilmsList`, () => {
  const tree = renderer
    .create(<FilmsList
      films={[{
        id: 2,
        title: `blablabla`,
        poster: `img/aviator.jpg`
      }]}
      onFilmTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
