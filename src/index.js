import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {films} from "./mocks/films";
import App from "./components/app/app.jsx";
import {reducer} from "./reducer.js";

const data = {
  name: `Pila`,
  genre: `comedy`,
  date: `2222`,
  films
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App {...data} />
    </Provider>,
    document.querySelector(`#root`)
);
