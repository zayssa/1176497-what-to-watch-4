import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./api";
import App from "./components/app/app.jsx";
import {reducers} from "./reducer/reducer";
import {Operation as FilmOperation} from "./reducer/films/films";
import {Operation as UserOperation, ActionCreator as UserActionCreator, AuthorizationStatus} from "./reducer/user/user";
import withActiveItem from "./components/hocs/with-active-item/with-active-item.jsx";
import withActiveState from "./components/hocs/with-active-state/with-active-state.jsx";

const api = createAPI(() => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(FilmOperation.loadFilms());
store.dispatch(UserOperation.checkAuth());

const AppWrapped = withActiveState(withActiveItem(App));

ReactDOM.render(
    <Provider store={store}>
      <AppWrapped api={api} />
    </Provider>,
    document.querySelector(`#root`)
);
