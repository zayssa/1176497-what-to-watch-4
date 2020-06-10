import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const data = {
  name: `atata`,
  genre: `bugaga`,
  date: `2026`,
};

ReactDOM.render(
    <App {...data} />,
    document.querySelector(`#root`)
);
