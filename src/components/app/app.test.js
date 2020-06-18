import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Render App`, () => {
  const data = {
    name: `atata`,
    genre: `bugaga`,
    date: `2026`,
    films: [
      {
        id: 1,
        title: `Titanic`,
        poster: `img/titanic.jpg`
      },

      {
        id: 2,
        title: `Back to the future`,
        poster: `img/back.jpg`
      },

      {
        id: 3,
        title: `Academy`,
        poster: `img/academy.jpg`
      },

      {
        id: 4,
        title: `Moana`,
        poster: `img/moana.jpg`
      },
    ]
  };

  const tree = renderer
    .create(<App
      {...data}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
