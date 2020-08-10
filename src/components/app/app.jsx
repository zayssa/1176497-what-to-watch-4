import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import {getFilms, getUserInfo, getPromoFilm} from "../../reducer/selectors";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import AddComment from '../add-comment/add-comment.jsx';
import MyList from "../my-list/my-list.jsx";
import VideoPlayer from "../video-player/video-player.jsx";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player.jsx";
import withActiveState from '../../hocs/with-active-state/with-active-state.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import withFilmsList from '../../hocs/with-films-list/with-films-list.jsx';
import history from "../../history";
import PrivateRoute from "../private-route/private-route.jsx";

import {IFilm} from "../../types/film";
import {IUser} from "../../types/user";

const App = (props) => {
  const VideoPlayerWrapped = withVideoPlayer(VideoPlayer);
  const AddCommentWrapped = withActiveItem(withActiveState(AddComment));
  const SignInWrapped = withActiveState(SignIn);
  const MyListWrapped = withFilmsList(MyList);

  return props.films.length && props.activeItem.id && props.userInfo ? (
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
            api={props.api}
            userInfo={props.userInfo}
            {...rrdProps}
          />
        )}/>
        <PrivateRoute path="/mylist" render={() => (
          <MyListWrapped userInfo={props.userInfo} api={props.api} />
        )} />
        <Route path="/player/:filmId" render={(rrdProps) => (
          <VideoPlayerWrapped
            film={props.films.find((film) => film.id.toString() === rrdProps.match.params.filmId)}
            {...rrdProps}
          />
        )}/>
        <Route path="/" render={(rrdProps) => (
          <Main
            {...props}
            {...rrdProps}
            userInfo={props.userInfo}
            activeItem={props.activeItem}
          />
        )}/>
      </Switch>
    </Router>
  ) : <div style={{height: `100vh`, display: `flex`, justifyContent: `center`, alignItems: `center`}}>Loading...</div>;
};

App.propTypes = {
  films: PropTypes.arrayOf(
      IFilm
  ).isRequired,
  activeItem: PropTypes.oneOfType([
    IFilm,
    () => {}
  ]),
  setActiveItem: PropTypes.func,
  isActiveState: PropTypes.bool,
  setActiveState: PropTypes.func,
  api: PropTypes.any.isRequired,
  userInfo: IUser
};

const mapStateToProps = (state) => ({
  activeItem: getPromoFilm(state),
  films: getFilms(state),
  userInfo: getUserInfo(state)
});

const mapDispatchToProps = () => ({});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
