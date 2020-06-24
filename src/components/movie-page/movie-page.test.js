import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

it(`Render MoviePage`, () => {
  const tree = renderer
    .create(<MoviePage
      film={{
        id: 1,
        title: `Stone`,
        poster: `img/avatar.jpg`,
        genre: `Drama`,
        year: `2000`,
        rating: 8.9,
        count: 240,
        bg: `img/bg-the-grand-budapest-hotel.jpg`,
        text: `In the 1930s, the Grand Budapest Hotel is a popular
    European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
    Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
    Gustave prides himself on providing first-class service to the hotel&apos;s guests,
    including satisfying the sexual needs of the many elderly women who stay there.
    When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself
    the recipient of a priceless painting and the chief suspect in her murder.`,
        director: `Paul Benning`,
        actors: `Sam Smith, Oko Saka, Eddy Eagl, Samanta Smith and other`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      }}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
