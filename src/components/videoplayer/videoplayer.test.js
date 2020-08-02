import React from "react";
import renderer from "react-test-renderer";
import Videoplayer from "./videoplayer.jsx";

it(`Render Videoplayer`, () => {
  const tree = renderer
    .create(<Videoplayer
      source="https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4"
      title="The Fast and the Furious"
      poster="img/avatar.jpg"
      isActiveState="true"
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
