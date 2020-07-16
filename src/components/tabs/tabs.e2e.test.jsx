import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs.jsx";

Enzyme.configure({
  adapter: new Adapter()
});


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
  actors: [`Val Kilmer`, `Dakota Fanning`, `Monica Bellucci`, `Jason Momoa`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runtime: 102,
  comments: [
    {
      author: `Kate Muir`,
      text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
      date: new Date(2016, 11, 24),
      rating: 8.9
    },
    {
      author: `Bill Goodykoontz`,
      text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
      date: new Date(2015, 11, 18),
      rating: 8.0
    },
    {
      author: `Amanda Greever`,
      text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
      date: new Date(2016, 11, 24),
      rating: 7.2
    }],
};

it(`Tabs default statement`, () => {

  const tabs = shallow(
      <Tabs film={film}/>
  );

  expect(tabs.state().activeTab === `overview`);
});

it(`Click on details tab`, () => {

  const tabs = shallow(
      <Tabs film={film}/>
  );

  const detailsTab = tabs.find(`.movie-nav__item`).at(1);
  detailsTab.simulate(`click`);

  expect(tabs.state().activeTab === `details`);
});

it(`Click on overview tab`, () => {

  const tabs = shallow(
      <Tabs film={film}/>
  );

  const overviewTab = tabs.find(`.movie-nav__item`).at(0);
  overviewTab.simulate(`click`);

  expect(tabs.state().activeTab === `overview`);
});

it(`Click on review tab`, () => {

  const tabs = shallow(
      <Tabs film={film}/>
  );

  const reviewTab = tabs.find(`.movie-nav__item`).at(2);
  reviewTab.simulate(`click`);

  expect(tabs.state().activeTab === `review`);
});
