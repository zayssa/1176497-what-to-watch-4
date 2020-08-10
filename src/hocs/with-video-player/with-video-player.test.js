import React from "react";
import renderer from "react-test-renderer";
import withVideoPlayer from "./with-video-player.jsx";
import MockComponent from "../../mocks/mock-component.jsx";

const MockComponentWrapped = withVideoPlayer(MockComponent);

describe(`WithActiveItem snapshot`, () => {
  it(`should render WithActiveItem component`, () => {
    const tree = renderer
      .create(
          <MockComponentWrapped />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
