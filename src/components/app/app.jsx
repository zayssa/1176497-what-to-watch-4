import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {Main} from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

import {IFilm} from "../../types/film";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilm: null
    };
  }

  onFilmTitleClick(film) {
    this.setState({
      currentFilm: film
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {this.state.currentFilm ? (
              <MoviePage
                film={this.state.currentFilm}
                films={this.props.films}
                onFilmTitleClick={this.onFilmTitleClick.bind(this)}
              />
            ) : (
              <Main
                {...this.props}
                onFilmTitleClick={this.onFilmTitleClick.bind(this)}
              />
            )}
          </Route>
          <Route path="/dev-films" exact>
            <MoviePage
              film={this.props.films[0]}
              films={this.props.films}
              onFilmTitleClick={this.onFilmTitleClick.bind(this)}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(
      IFilm
  ).isRequired
};

export default App;
