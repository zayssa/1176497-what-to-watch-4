import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`FilmTitleClick`, () => {
  const onTitleClick = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={{
          id: 1,
          title: `Spain`,
          poster: `img/avatar.jpg`,
          genre: `Kids&Family`,
          year: `2018`,
          rating: 7.0,
          count: 165,
          bg: `img/bg-the-grand-budapest-hotel.jpg`,
          text: `In the 1930s, the Grand Budapest Hotel is a popular
          European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
          Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
          Gustave prides himself on providing first-class service to the hotel&apos;s guests,
          including satisfying the sexual needs of the many elderly women who stay there.
          When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself
          the recipient of a priceless painting and the chief suspect in her murder.`,
          director: `Ashton Kutcher`,
          actors: `Zoe Saldana, Jamie Lee Curtis, James Woods and other`,
        }}
        onTitleClick={onTitleClick}
        onPosterHover={() => {}}
      />
  );

  const title = filmCard.find(`.small-movie-card__title`);

  title.simulate(`click`);

  expect(onTitleClick).toHaveBeenCalledTimes(1);
});

it(`FilmPosterHover`, () => {
  const film = {
    id: 1,
    title: `Stone`,
    poster: `img/avatar.jpg`,
    genre: `Horror`,
    year: `1990`,
    rating: 5.1,
    count: 130,
    bg: `img/bg-the-grand-budapest-hotel.jpg`,
    text: `In the 1930s, the Grand Budapest Hotel is a popular
    European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
    Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
    Gustave prides himself on providing first-class service to the hotel&apos;s guests,
    including satisfying the sexual needs of the many elderly women who stay there.
    When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself
    the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Santa Claus`,
    actors: `Val Kilmer, Dakota Fanning, Monica Bellucci, Jason Momoa and other`,
  };
  let result;

  const filmCard = shallow(
      <FilmCard
        film={film}
        onTitleClick={() => {}}
        onPosterHover={(data) => {
          result = data;
        }}
      />
  );

  const poster = filmCard.find(`.small-movie-card__image`);

  poster.simulate(`mouseenter`);

  expect(result).toMatchObject(film);
});
