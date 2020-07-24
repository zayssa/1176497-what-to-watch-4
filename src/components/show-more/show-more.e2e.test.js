import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMore from "./show-more.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`ShowMoreButtonClick`, () => {
  const onButtonClick = jest.fn();

  const showMore = shallow(
      <ShowMore
        onClick={onButtonClick}
      />
  );

  const button = showMore.find(`.catalog__button`);
  button.simulate(`click`);

  expect(onButtonClick).toHaveBeenCalledTimes(1);
});
