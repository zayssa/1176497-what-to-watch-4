import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs.jsx";
import {createAPI} from "../../api";

const api = createAPI();

Enzyme.configure({
  adapter: new Adapter()
});


const film = {
  id: 1,
  title: `Stone`,
  poster: `img/avatar.jpg`,
  genre: `Horror`,
  year: 1990,
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
  actors: [`Val Kilmer`, `Dakota Fanning`, `Monica Bellucci`, `Jason Momoa`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runtime: 102,
  previewImage: `img/the-grand-budapest-hotel.jpg`,
  bgColor: `#ffffff`,
  videoLink: `https://some-link`,
  isFavorite: true
};

it(`Click on details tab`, () => {
  let tab = `overview`;
  const setTab = (data) => {
    tab = data;
  };

  const tabs = shallow(
      <Tabs film={film} activeItem={tab} setActiveItem={setTab} api={api} />
  );

  const detailsTab = tabs.find(`.movie-nav__item`).at(1);
  detailsTab.simulate(`click`);

  expect(tab === `details`);
});

it(`Click on overview tab`, () => {
  let tab = `overview`;
  const setTab = (data) => {
    tab = data;
  };

  const tabs = shallow(
      <Tabs film={film} activeItem={tab} setActiveItem={setTab} api={api} />
  );

  const overviewTab = tabs.find(`.movie-nav__item`).at(0);
  overviewTab.simulate(`click`);

  expect(tab === `overview`);
});

it(`Click on review tab`, () => {
  let tab = `overview`;
  const setTab = (data) => {
    tab = data;
  };

  const tabs = shallow(
      <Tabs film={film} activeItem={tab} setActiveItem={setTab} api={api} />
  );

  const reviewTab = tabs.find(`.movie-nav__item`).at(2);
  reviewTab.simulate(`click`);

  expect(tab === `review`);
});
