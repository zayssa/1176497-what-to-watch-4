import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";

it(`Render Main`, () => {
  const data = {
    activeItem: {
      id: 1,
      title: `Bersek`,
      poster: `img/avatar.jpg`,
      genre: `Horror`,
      year: 2008,
      rating: 6.8,
      count: 170,
      bg: `img/bg-the-grand-budapest-hotel.jpg`,
      text: `In the 1930s, the Grand Budapest Hotel is a popular
      European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
      Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
      Gustave prides himself on providing first-class service to the hotel&apos;s guests,
      including satisfying the sexual needs of the many elderly women who stay there.
      When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself
      the recipient of a priceless painting and the chief suspect in her murder.`,
      director: `Eva Mendes`,
      actors: [`Christina Ricci`, `Adriano Celentano`, `Robin Tunney`, `Rutger Hauer`],
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      runtime: 102,
      previewImage: `img/the-grand-budapest-hotel.jpg`,
      bgColor: `#ffffff`,
      videoLink: `https://some-link`,
      isFavorite: true
    },
    films: [
      {
        id: 2,
        title: `The man`,
        poster: `img/macbeth.jpg`,
        genre: `Comedy`,
        year: 2020,
        rating: 7.3,
        count: 216,
        bg: `img/bg-the-grand-budapest-hotel.jpg`,
        text: `In the 1930s, the Grand Budapest Hotel is a popular
        European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
        Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
        Gustave prides himself on providing first-class service to the hotel&apos;s guests,
        including satisfying the sexual needs of the many elderly women who stay there.
        When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself
        the recipient of a priceless painting and the chief suspect in her murder.`,
        director: `Lewis Gilbert`,
        actors: [`Gordon Ramsay`, `Mary Gordon`, `Stephen Fry`, `Frank Oz`],
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        runtime: 102,
        previewImage: `img/the-grand-budapest-hotel.jpg`,
        bgColor: `#ffffff`,
        videoLink: `https://some-link`,
        isFavorite: true
      }
    ],
    currentGenre: `comedy`,
    setGenre: () => {}
  };

  const tree = renderer
    .create(<Main
      {...data}
      onFilmTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
