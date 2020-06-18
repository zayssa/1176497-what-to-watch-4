import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Render Main`, () => {
  const data = {
    name: `atata`,
    genre: `bugaga`,
    date: `2026`,
    films: [
      {
        id: 1,
        title: `Aviator`,
        poster: `img/aviator.jpg`
      },

      {
        id: 2,
        title: `BraveHeart`,
        poster: `img/braveheart.jpg`
      },

      {
        id: 3,
        title: `Aurella`,
        poster: `img/aurella.jpg`
      },

      {
        id: 4,
        title: `Pinokkio`,
        poster: `img/pinokkio.jpg`
      },
    ]
  };

  const tree = renderer
    .create(<Main
      {...data}
      onFilmTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
