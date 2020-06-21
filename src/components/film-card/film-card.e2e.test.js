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
          title: `Some film`,
          poster: `img/avatar.jpg`
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
    title: `Some film`,
    poster: `img/avatar.jpg`
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
