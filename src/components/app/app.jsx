import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";


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
              <MoviePage film={this.state.currentFilm}/>
            ) : (
              <Main
                {...this.props}
                onFilmTitleClick={this.onFilmTitleClick.bind(this)}
              />
            )}
          </Route>
          <Route path="/dev-films" exact>
            <MoviePage film={this.props.films[0]} />
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
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        bg: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        actors: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
      })
  )
};

export default App;
