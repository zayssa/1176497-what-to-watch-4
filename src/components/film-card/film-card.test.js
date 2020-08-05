import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";
import history from "../../history";

it(`Render FilmCard`, () => {
  const tree = renderer
    .create(<Router history={history}><FilmCard
      film={{
        id: 1,
        title: `Gravity`,
        poster: `img/avatar.jpg`,
        genre: `Comedy`,
        year: 2006,
        rating: 5.6,
        count: 240,
        bg: `img/bg-the-grand-budapest-hotel.jpg`,
        text: `In the 1930s, the Grand Budapest Hotel is a popular
        European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
        Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
        Gustave prides himself on providing first-class service to the hotel&apos;s guests,
        including satisfying the sexual needs of the many elderly women who stay there.
        When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself
        the recipient of a priceless painting and the chief suspect in her murder.`,
        director: `Juliette Binoche`,
        actors: [`Ray Liotta`, `Iggy Pop`, `Sean Bean`, `Keira Knightley`, `James McAvoy`, `Kate Winslet`],
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        runtime: 135,
        previewImage: `img/the-grand-budapest-hotel.jpg`,
        bgColor: `#ffffff`,
        videoLink: `https://some-link`,
        isFavorite: true

      }}
      onTitleClick={() => {}}
      onPosterHover={() => {}}
      setActiveState={() => {}}
    /></Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
