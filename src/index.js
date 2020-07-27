import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {films} from "./mocks/films";
import App from "./components/app/app.jsx";
import {reducer} from "./reducer.js";
import withActiveItem from "./components/hocs/with-active-item/with-active-item.jsx";

const data = {
  name: `Pila`,
  genre: `comedy`,
  date: `2222`,
  films
};

const store = createStore(reducer);
const AppWrapped = withActiveItem(App);

ReactDOM.render(
    <Provider store={store}>
      <AppWrapped {...data} />
    </Provider>,
    document.querySelector(`#root`)
);
