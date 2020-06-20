import React from "react";
import ReactDOM from "react-dom";
import {films} from "./mocks/films";
import App from "./components/app/app.jsx";

const data = {
  name: `Pila`,
  genre: `comedy`,
  date: `2222`,
  films
};

ReactDOM.render(
    <App {...data} />,
    document.querySelector(`#root`)
);
