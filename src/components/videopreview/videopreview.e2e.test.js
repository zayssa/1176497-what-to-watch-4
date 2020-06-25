import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Videopreview from "./videopreview.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Videopreview play on hover`, () => {
  const videopreview = mount(
      <Videopreview
        preview="https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4"
        poster="img/macbeth.jpg"
      />
  );

  const video = videopreview.find(`video`);
  let isVideoPaused = video.getElement().ref.current.paused;

  window.HTMLMediaElement.prototype.play = () => {
    isVideoPaused = false;
  };
  window.HTMLMediaElement.prototype.load = () => {
    isVideoPaused = true;
  };

  expect(isVideoPaused).toBe(true);

  videopreview.setProps({isActive: true});

  expect(isVideoPaused).toBe(false);
});
