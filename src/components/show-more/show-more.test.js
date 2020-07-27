import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "./show-more.jsx";

it(`Render ShowMore`, () => {
  const tree = renderer
    .create(<ShowMore
      onClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
