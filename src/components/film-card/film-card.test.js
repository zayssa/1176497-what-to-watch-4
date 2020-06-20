import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

it(`Render FilmCard`, () => {
  const tree = renderer
    .create(<FilmCard
      film={{
        id: 3,
        title: `cat`,
        poster: `img/avatar.jpg`
      }}
      onTitleClick={() => {}}
      onPosterHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
