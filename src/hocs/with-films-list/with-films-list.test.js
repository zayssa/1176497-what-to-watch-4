import React from "react";
import renderer from "react-test-renderer";
import withFilmsList from "./with-films-list.jsx";
import MockComponent from "../../mocks/mock-component.jsx";

const MockComponentWrapped = withFilmsList(MockComponent);

describe(`WithFilmsList snapshot`, () => {
  it(`should render WithFilmsList component`, () => {
    const tree = renderer
      .create(
          <MockComponentWrapped />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
