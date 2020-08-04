import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {reducers} from "../../reducer/reducer";
import {createAPI} from "../../api";

const api = createAPI();

it(`Render App`, () => {
  const data = {
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
        actors: [`Maggie Q`, `Sean Penn`, `Nikolaj Coster-Waldau`, `Ewan McGregor`, `Tilda Swinton`],
        preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        runtime: 90,
        previewImage: `img/the-grand-budapest-hotel.jpg`,
        bgColor: `#ffffff`,
        videoLink: `https://some-link`,
        isFavorite: false
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
        actors: [`Lena Headey`, `Milos Bikovic`, `Juju Chan`, `Channing Tatum`, `Helena Bonham Carter`],
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        runtime: 90,
        previewImage: `img/the-grand-budapest-hotel.jpg`,
        bgColor: `#ffffff`,
        videoLink: `https://some-link`,
        isFavorite: true
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
        actors: [`Jennifer Love Hewitt`, `Wesley Snipes`, `Ed Harris`, `Christian Bale`, `Martin Freeman`],
        preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        runtime: 102,
        previewImage: `img/the-grand-budapest-hotel.jpg`,
        bgColor: `#ffffff`,
        videoLink: `https://some-link`,
        isFavorite: true
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
        actors: [`Christopher Plummer`, `Kevin Zegers`, `Tim Roth`, `Jessica Alba`],
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        runtime: 98,
        previewImage: `img/the-grand-budapest-hotel.jpg`,
        bgColor: `#ffffff`,
        videoLink: `https://some-link`,
        isFavorite: false
      },
    ]
  };

  const store = createStore(reducers);

  const tree = renderer
    .create(
        <Provider store={store}>
          <App {...data} api={api} activeItem={null} setActiveItem={() => {}} />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
