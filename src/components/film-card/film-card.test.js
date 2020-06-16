import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

it(`Render FilmCard`, () => {
  const tree = renderer
    .create(<FilmCard
      film="Some film title"
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
