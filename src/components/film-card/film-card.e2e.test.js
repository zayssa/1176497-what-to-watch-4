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
          actors: [`Zoe Saldana`, `Jamie Lee Curtis`, `James Woods and other`, `Luke Evans`, `Gerard Butler`],
          preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          runtime: 75,
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
              date: new Date(2015, 10, 13),
              rating: 8.0
            },
            {
              author: `Amanda Greever`,
              text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
              date: new Date(2015, 11, 24),
              rating: 7.2
            }],
        }}
        onTitleClick={onTitleClick}
        onPosterHover={() => {}}
      />
  );

  const title = filmCard.find(`.small-movie-card__title`);

  title.simulate(`click`);

  expect(onTitleClick).toHaveBeenCalledTimes(1);
});

it(`FilmPosterClick`, () => {
  const onPosterClick = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={{
          id: 1,
          title: `DogShow`,
          poster: `img/avatar.jpg`,
          genre: `Horror`,
          year: `2013`,
          rating: 6.8,
          count: 145,
          bg: `img/bg-the-grand-budapest-hotel.jpg`,
          text: `In the 1930s, the Grand Budapest Hotel is a popular
          European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).
          Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
          Gustave prides himself on providing first-class service to the hotel&apos;s guests,
          including satisfying the sexual needs of the many elderly women who stay there.
          When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself
          the recipient of a priceless painting and the chief suspect in her murder.`,
          director: `Joe Dassan`,
          actors: [`Silvestor Stallone`, `Kim Rise`, `Ralph Fiennes`, `Daniel Craig`],
          preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          runtime: 125,
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
              date: new Date(2015, 9, 24),
              rating: 8.0
            },
            {
              author: `Amanda Greever`,
              text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
              date: new Date(2015, 10, 29),
              rating: 7.2
            }],
        }}
        onTitleClick={onPosterClick}
        onPosterHover={() => {}}
      />
  );

  const poster = filmCard.find(`.small-movie-card__image`);

  poster.simulate(`click`);

  expect(onPosterClick).toHaveBeenCalledTimes(1);
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

  setTimeout(() => {
    expect(result).toMatchObject(film);
  }, 1000);
});
