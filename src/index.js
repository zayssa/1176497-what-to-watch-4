import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const data = {
  name: `Pila`,
  genre: `comedy`,
  date: `2222`,
  films: [
    `Titanic`,
    `Harry Poter`,
    `Forest Gamp`,
    `Lost`,
    `1+1`,
    `Hobbit`,
    `Hatchi`,
    `Home alone`,
    `Angel`,
    `Fury`,
    `Hancock`,
    `The ABC murders`,
    `Hangover`,
    `The passage`,
    `The boyfreind`,
    `Limitless`,
    `Ice age`,
    `The silence`,
    `Sahara`,
    `Homefront`
  ]
};

ReactDOM.render(
    <App {...data} />,
    document.querySelector(`#root`)
);
