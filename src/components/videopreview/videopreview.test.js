import React from "react";
import renderer from "react-test-renderer";
import Videopreview from "./videopreview.jsx";

it(`Render Videopreview`, () => {
  const tree = renderer
    .create(<Videopreview
      preview="https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4"
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
