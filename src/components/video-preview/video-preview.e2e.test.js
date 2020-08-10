import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPreview from "./video-preview.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`VideoPreview play on hover`, () => {
  const videoPreview = mount(
      <VideoPreview
        preview="https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4"
        poster="img/macbeth.jpg"
      />
  );

  const video = videoPreview.find(`video`);
  let isVideoPaused = video.getElement().ref.current.paused;

  window.HTMLMediaElement.prototype.play = () => {
    isVideoPaused = false;
  };
  window.HTMLMediaElement.prototype.load = () => {
    isVideoPaused = true;
  };

  expect(isVideoPaused).toBe(true);

  videoPreview.setProps({isActive: true});

  expect(isVideoPaused).toBe(false);
});
