import React from "react";
import renderer from "react-test-renderer";
import withVideoplayer from "./with-videoplayer.jsx";
import MockComponent from "../../../mocks/mock-component.jsx";

const MockComponentWrapped = withVideoplayer(MockComponent);

describe(`WithActiveItem snapshot`, () => {
  it(`should render WithActiveItem component`, () => {
    const tree = renderer
      .create(
          <MockComponentWrapped />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
