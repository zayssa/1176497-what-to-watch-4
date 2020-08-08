import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import {getFilms, getUserInfo} from "../../reducer/selectors";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Videoplayer from "../videoplayer/videoplayer.jsx";
import withVideoplayer from "../hocs/with-videoplayer/with-videoplayer.jsx";
import withActiveState from '../hocs/with-active-state/with-active-state.jsx';
import withActiveItem from '../hocs/with-active-item/with-active-item.jsx';
import history from "../../history";
import PrivateRoute from "../private-route/private-route.jsx";

import {IFilm} from "../../types/film";
import {IUser} from "../../types/user";
import AddComment from '../add-comment/add-comment.jsx';

const App = (props) => {
  const VideoplayerWrapped = withVideoplayer(Videoplayer);
  const AddCommentWrapped = withActiveItem(withActiveState(AddComment));
  const SignInWrapped = withActiveState(SignIn);

  const onPlay = () => {
    props.setActiveState(true);
  };

  const activeItem = props.activeItem || props.films[0];

  return props.films.length && props.userInfo ? (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <SignInWrapped />
        </Route>
        <PrivateRoute path="/films/:filmId/review" render={(rrdProps) => (
          <AddCommentWrapped films={props.films} userInfo={props.userInfo} api={props.api} {...rrdProps} />
        )}/>
        <Route path="/films/:filmId" render={(rrdProps) => (
          <MoviePage
            films={props.films}
            onFilmTitleClick={props.setActiveItem}
            onPlay={onPlay}
            api={props.api}
            userInfo={props.userInfo}
            {...rrdProps}
          />
        )}/>
        <Route path="/">
          <Main
            {...props}
            onFilmTitleClick={props.setActiveItem}
            onPlay={onPlay}
            userInfo={props.userInfo}
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
  api: PropTypes.any.isRequired,
  userInfo: IUser
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  userInfo: getUserInfo(state)
});

const mapDispatchToProps = () => ({});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
