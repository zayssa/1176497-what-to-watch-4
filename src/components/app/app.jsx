import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

import {IFilm} from "../../types/film";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {props.activeItem ? (
            <MoviePage
              film={props.activeItem}
              films={props.films}
              onFilmTitleClick={props.setActiveItem}
            />
          ) : (
            <Main
              {...props}
              onFilmTitleClick={props.setActiveItem}
            />
          )}
        </Route>
        <Route path="/dev-films" exact>
          <MoviePage
            film={props.films[0]}
            films={props.films}
            onFilmTitleClick={props.setActiveItem}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(
      IFilm
  ).isRequired,
  activeItem: IFilm || null,
  setActiveItem: PropTypes.func
};

export default App;
