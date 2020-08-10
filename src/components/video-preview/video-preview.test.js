import React from "react";
import renderer from "react-test-renderer";
import VideoPreview from "./video-preview.jsx";

it(`Render VideoPreview`, () => {
  const tree = renderer
    .create(<VideoPreview
      preview="https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4"
      poster="img/avatar.jpg"
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
