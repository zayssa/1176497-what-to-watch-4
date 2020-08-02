import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";
import {reducer} from "../../reducer";

Enzyme.configure({
  adapter: new Adapter()
});

it(`FilmTitleClick`, () => {
  const data = {
    name: `crcrcr`,
    genre: `qwe`,
    date: `1990`,
    films: [
      {
        id: 1,
        title: `Raven`,
        poster: `img/avatar.jpg`,
        genre: `Sci-Fi`,
        year: `1939`,
        rating: 9.9,
        count: 250,
        bg: `img/bg-the-grand-budapest-hotel.jpg`,
        text: `In the 1930s, the Grand Budapest Hotel is a popular
        European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
        Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
        Gustave prides himself on providing first-class service to the hotel&apos;s guests,
        including satisfying the sexual needs of the many elderly women who stay there.
        When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself
        the recipient of a priceless painting and the chief suspect in her murder.`,
        director: `Lochlyn Munro`,
        actors: [`Claire Forlani`, `Jeffrey Dean Morgan`, `Teresa Palmer`, `Leslie Nielsen`],
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        runtime: 78,
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
            date: new Date(2015, 10, 15),
            rating: 8.0
          },
          {
            author: `Amanda Greever`,
            text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
            date: new Date(2015, 8, 10),
            rating: 7.2
          },
        ]
      }
    ]
  };
  const store = createStore(reducer);
  let activeItem = null;
  const setActiveItem = (item) => {
    activeItem = item;
  };

  const app = mount(
      <Provider store={store}>
        <App {...data} activeItem={activeItem} setActiveItem={setActiveItem} />
      </Provider>
  );

  const title = app.find(`.small-movie-card__title`);

  title.simulate(`click`);

  expect(activeItem).toMatchObject(data.films[0]);
});
