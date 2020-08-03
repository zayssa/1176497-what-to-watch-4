import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getFilms} from "../../reducer/selectors";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import Videoplayer from "../videoplayer/videoplayer.jsx";
import withVideoplayer from "../hocs/with-videoplayer/with-videoplayer.jsx";

import {IFilm} from "../../types/film";

const App = (props) => {
  const VideoplayerWrapped = withVideoplayer(Videoplayer);

  const onPlay = () => {
    props.setActiveState(true);
  };

  const activeItem = props.activeItem || props.films[0];

  return props.films.length ? (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {props.activeItem ? (
            <MoviePage
              film={props.activeItem}
              films={props.films}
              onFilmTitleClick={props.setActiveItem}
              onPlay={onPlay}
              api={props.api}
            />
          ) : (
            <Main
              {...props}
              onFilmTitleClick={props.setActiveItem}
              onPlay={onPlay}
              activeItem={activeItem}
            />
          )}
        </Route>
        <Route path="/dev-films" exact>
          <MoviePage
            film={props.films[0]}
            films={props.films}
            onFilmTitleClick={props.setActiveItem}
            onPlay={onPlay}
            api={props.api}
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
    </BrowserRouter>
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
