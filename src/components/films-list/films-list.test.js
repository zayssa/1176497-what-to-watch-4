import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";
import history from "../../history";

it(`Render FilmsList`, () => {
  const tree = renderer
    .create(<Router history={history}><FilmsList
      films={[{
        id: 1,
        title: `Look`,
        poster: `img/avatar.jpg`,
        genre: `Comedy`,
        year: 2002,
        rating: 7.6,
        count: 178,
        bg: `img/bg-the-grand-budapest-hotel.jpg`,
        text: `In the 1930s, the Grand Budapest Hotel is a popular
        European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
        Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
        Gustave prides himself on providing first-class service to the hotel&apos;s guests,
        including satisfying the sexual needs of the many elderly women who stay there.
        When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself
        the recipient of a priceless painting and the chief suspect in her murder.`,
        director: `Billy Zane`,
        actors: [`Sherilyn Fenn`, `Michelle Rodriguez`, `Patrick Swayze`, `Benedict Cumberbatch`, `Emily Blunt`],
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        runtime: 102,
        previewImage: `img/the-grand-budapest-hotel.jpg`,
        bgColor: `#ffffff`,
        videoLink: `https://some-link`,
        isFavorite: false
      }]}
    /></Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
