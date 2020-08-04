import React from "react";
import renderer from "react-test-renderer";
import {SiteHeader} from "./site-header.jsx";

it(`Render SiteHeader`, () => {
  const tree = renderer
    .create(<SiteHeader authorizationStatus="NO_AUTH" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
