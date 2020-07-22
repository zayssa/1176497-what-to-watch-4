import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list.jsx";

it(`Render GenresList`, () => {
  const tree = renderer
    .create(<GenresList
      genres={[`comedy`, `horror`]}
      currentGenre="comedy"
      setGenre={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
