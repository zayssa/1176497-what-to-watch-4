import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";
import history from "../../history";


it(`Render SignIn page`, () => {
  const tree = renderer
    .create(<Router history={history}><SignIn /></Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
