import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import {getFilms} from "../../reducer/selectors";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Videoplayer from "../videoplayer/videoplayer.jsx";
import withVideoplayer from "../hocs/with-videoplayer/with-videoplayer.jsx";
import history from "../../history";

import {IFilm} from "../../types/film";

const App = (props) => {
  const VideoplayerWrapped = withVideoplayer(Videoplayer);

  const onPlay = () => {
    props.setActiveState(true);
  };

  const activeItem = props.activeItem || props.films[0];

  return props.films.length ? (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/film/:filmId" render={(rrdProps) => (
          <MoviePage
            films={props.films}
            onFilmTitleClick={props.setActiveItem}
            onPlay={onPlay}
            api={props.api}
            {...rrdProps}
          />
        )}/>
        <Route path="/">
          <Main
            {...props}
            onFilmTitleClick={props.setActiveItem}
            onPlay={onPlay}
            activeItem={activeItem}
          />
        </Route>
      </Switch>
      <VideoplayerWrapped
        title={activeItem.title}
        poster={activeItem.poster}
        source={activeItem.videoLink}
        isActiveState={props.isActiveState}
        onExit={() => {
          props.setActiveState(false);
        }}
      />
    </Router>
  ) : <div style={{height: `100vh`, display: `flex`, justifyContent: `center`, alignItems: `center`}}>Loading...</div>;
};

App.propTypes = {
  films: PropTypes.arrayOf(
      IFilm
  ).isRequired,
  activeItem: IFilm || null,
  setActiveItem: PropTypes.func,
  isActiveState: PropTypes.bool,
  setActiveState: PropTypes.func,
  api: PropTypes.any.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state)
});

const mapDispatchToProps = () => ({});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
