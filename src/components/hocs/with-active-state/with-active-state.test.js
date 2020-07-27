import React from "react";
import renderer from "react-test-renderer";
import withActiveState from "./with-active-state.jsx";
import MockComponent from "../../../mocks/mock-component.jsx";

const MockComponentWrapped = withActiveState(MockComponent);

describe(`WithActiveItem snapshot`, () => {
  it(`should render WithActiveItem component`, () => {
    const tree = renderer
      .create(
          <MockComponentWrapped />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
