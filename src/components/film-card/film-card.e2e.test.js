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
        film="film"
        onTitleClick={onTitleClick}
      />
  );

  const title = filmCard.find(`.small-movie-card__title`);

  title.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});
