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
        actors: `Ray Liotta, Iggy Pop, Sean Bean and other`,
      }}
      onTitleClick={() => {}}
      onPosterHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
