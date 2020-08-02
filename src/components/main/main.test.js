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
      year: `2008`,
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
      comments: [
        {
          author: `Kate Muir`,
          text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
          date: new Date(2015, 10, 15),
          rating: 8.9
        },
        {
          author: `Bill Goodykoontz`,
          text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
          date: new Date(2016, 11, 23),
          rating: 8.0
        },
        {
          author: `Amanda Greever`,
          text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
          date: new Date(2016, 7, 10),
          rating: 7.2
        }],
    },
    films: [
      {
        id: 2,
        title: `The man`,
        poster: `img/macbeth.jpg`,
        genre: `Comedy`,
        year: `2020`,
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
        comments: [
          {
            author: `Kate Muir`,
            text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
            date: new Date(2015, 10, 15),
            rating: 8.9
          },
          {
            author: `Bill Goodykoontz`,
            text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
            date: new Date(2016, 11, 23),
            rating: 8.0
          },
          {
            author: `Amanda Greever`,
            text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
            date: new Date(2016, 7, 10),
            rating: 7.2
          }],
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
