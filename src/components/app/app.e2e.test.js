import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

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
        director: ` Lochlyn Munro`,
        actors: ` Claire Forlani,  Jeffrey Dean Morgan, Teresa Palmer,  Leslie Nielsen and other`,
      }
    ]
  };

  const app = mount(
      <App {...data} />
  );

  const title = app.find(`.small-movie-card__title`);

  title.simulate(`click`);

  expect(app.state().currentFilm).toMatchObject(data.films[0]);
});
