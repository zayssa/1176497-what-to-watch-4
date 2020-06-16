import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Render Main`, () => {
  const data = {
    name: `atata`,
    genre: `bugaga`,
    date: `2026`,
    films: [
      `Fantastic Beasts: The Crimes of Grindelwald`,
      `Bohemian Rhapsody`,
      `Macbeth`,
      `Aviator`,
      `We need to talk about Kevin`,
      `What We Do in the Shadows`,
      `Revenant`,
      `Johnny English`,
      `Shutter Island`,
      `Pulp Fiction`,
      `No Country for Old Men`,
      `Snatch`,
      `Moonrise Kingdom`,
      `Seven Years in Tibet`,
      `Midnight Special`,
      `War of the Worlds`,
      `Dardjeeling Limited`,
      `Orlando`,
      `Mindhunter`,
      `Midnight Specialist`
    ]
  };

  const tree = renderer
    .create(<Main
      {...data}
      onFilmTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
