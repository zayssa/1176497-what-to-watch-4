import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";

it(`Render SignIn page`, () => {
  const tree = renderer
    .create(<SignIn />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
