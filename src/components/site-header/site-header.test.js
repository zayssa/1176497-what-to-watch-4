import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import {SiteHeader} from "./site-header.jsx";
import history from "../../history";


it(`Render SiteHeader`, () => {
  const tree = renderer
    .create(<Router history={history}><SiteHeader authorizationStatus="NO_AUTH" /></Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
