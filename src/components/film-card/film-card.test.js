import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

it(`Render FilmCard`, () => {
  const tree = renderer
    .create(<FilmCard
      film={{
        id: 1,
        title: `Gravity`,
        poster: `img/avatar.jpg`,
        genre: `Comedy`,
        year: `2006`,
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
            date: new Date(2016, 7, 10),
            rating: 8.0
          },
          {
            author: `Amanda Greever`,
            text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
            date: new Date(2015, 10, 15),
            rating: 7.2
          }],

      }}
      onTitleClick={() => {}}
      onPosterHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
