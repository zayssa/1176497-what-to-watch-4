import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import {getFilms, getUserInfo} from "../../reducer/selectors";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import AddComment from '../add-comment/add-comment.jsx';
import MyList from "../my-list/my-list.jsx";
import Videoplayer from "../videoplayer/videoplayer.jsx";
import withVideoplayer from "../hocs/with-videoplayer/with-videoplayer.jsx";
import withActiveState from '../hocs/with-active-state/with-active-state.jsx';
import withActiveItem from '../hocs/with-active-item/with-active-item.jsx';
import withFilmsList from '../hocs/with-films-list/with-films-list.jsx';
import history from "../../history";
import PrivateRoute from "../private-route/private-route.jsx";

import {IFilm} from "../../types/film";
import {IUser} from "../../types/user";

const App = (props) => {
  const VideoplayerWrapped = withVideoplayer(Videoplayer);
  const AddCommentWrapped = withActiveItem(withActiveState(AddComment));
  const SignInWrapped = withActiveState(SignIn);
  const MyListWrapped = withFilmsList(MyList);

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
            api={props.api}
            userInfo={props.userInfo}
            {...rrdProps}
          />
        )}/>
        <PrivateRoute path="/mylist" render={() => (
          <MyListWrapped userInfo={props.userInfo} api={props.api} />
        )} />
        <Route path="/player/:filmId" render={(rrdProps) => (
          <VideoplayerWrapped
            film={props.films.find((film) => film.id.toString() === rrdProps.match.params.filmId)}
            {...rrdProps}
          />
        )}/>
        <Route path="/">
          <Main
            {...props}
            userInfo={props.userInfo}
            activeItem={activeItem}
          />
        </Route>
      </Switch>
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
