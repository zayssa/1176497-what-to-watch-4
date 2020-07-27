import React from "react";
import renderer from "react-test-renderer";
import withPage from "../with-page";
import MockComponent from "../../../mocks/mock-component.js";

const MockComponentWrapped = withPage(MockComponent);

describe(`WithActiveItem snapshot`, () => {
  it(`should render WithActiveItem component`, () => {
    const tree = renderer
      .create(
          <MockComponentWrapped />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
