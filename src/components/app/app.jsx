import React from "react";
import Main from "../main/main.jsx";


const App = (data) => {
  const onFilmTitleClick = () => {};

  return (
    <Main
      {...data}
      onFilmTitleClick={onFilmTitleClick}
    />
  );
};

export default App;
