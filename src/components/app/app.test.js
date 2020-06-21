import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Render App`, () => {
  const data = {
    name: `atata`,
    genre: `bugaga`,
    date: `2026`,
    films: [
      {
        id: 1,
        title: `Stone`,
        poster: `img/avatar.jpg`,
        genre: `Drama`,
        year: `2000`,
        rating: 8.9,
        count: 240,
        bg: `img/bg-the-grand-budapest-hotel.jpg`,
        text: `In the 1930s, the Grand Budapest Hotel is a popular
        European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
        Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
        Gustave prides himself on providing first-class service to the hotel&apos;s guests,
        including satisfying the sexual needs of the many elderly women who stay there.
        When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself
        the recipient of a priceless painting and the chief suspect in her murder.`,
        director: `Luke Goss`,
        actors: `Maggie Q,  Sean Penn, Nikolaj Coster-Waldau and other`,
      },

      {
        id: 2,
        title: `Back to the future`,
        poster: `img/back.jpg`,
        genre: `Romance`,
        year: `2019`,
        rating: 7.2,
        count: 135,
        bg: `img/bg-the-grand-budapest-hotel.jpg`,
        text: `In the 1930s, the Grand Budapest Hotel is a popular
        European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
        Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
        Gustave prides himself on providing first-class service to the hotel&apos;s guests,
        including satisfying the sexual needs of the many elderly women who stay there.
        When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself
        the recipient of a priceless painting and the chief suspect in her murder.`,
        director: `Carla Gugino`,
        actors: `Lena Headey, Milos Bikovic, Juju Chan, Channing Tatum and other`,
      },

      {
        id: 3,
        title: `Academy`,
        poster: `img/academy.jpg`,
        genre: `Crime`,
        year: `2016`,
        rating: 3.1,
        count: 98,
        bg: `img/bg-the-grand-budapest-hotel.jpg`,
        text: `In the 1930s, the Grand Budapest Hotel is a popular
        European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
        Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
        Gustave prides himself on providing first-class service to the hotel&apos;s guests,
        including satisfying the sexual needs of the many elderly women who stay there.
        When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself
        the recipient of a priceless painting and the chief suspect in her murder.`,
        director: `Ben Kingsley`,
        actors: `Jennifer Love Hewitt, Wesley Snipes, Ed Harris and other`,
      },

      {
        id: 4,
        title: `Moana`,
        poster: `img/moana.jpg`,
        genre: `Kids&Family`,
        year: `2011`,
        rating: 5.4,
        count: 198,
        bg: `img/bg-the-grand-budapest-hotel.jpg`,
        text: `In the 1930s, the Grand Budapest Hotel is a popular
        European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
        Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
        Gustave prides himself on providing first-class service to the hotel&apos;s guests,
        including satisfying the sexual needs of the many elderly women who stay there.
        When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself
        the recipient of a priceless painting and the chief suspect in her murder.`,
        director: `Til Schweiger`,
        actors: `Christopher Plummer, Kevin Zegers, Tim Roth, Jessica Alba and other`,
      },
    ]
  };

  const tree = renderer
    .create(<App
      {...data}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
