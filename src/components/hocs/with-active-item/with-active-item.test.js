import React from "react";
import renderer from "react-test-renderer";
import withActiveItem from "./with-active-item.jsx";
import MockComponent from "../../../mocks/mock-component.jsx";

const MockComponentWrapped = withActiveItem(MockComponent);

describe(`WithActiveItem snapshot`, () => {
  it(`should render WithActiveItem component`, () => {
    const tree = renderer
      .create(
          <MockComponentWrapped />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
