import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./api";
import App from "./components/app/app.jsx";
import {ActionCreator, reducers} from "./reducer/reducer";
import {Operation} from "./reducer/films/films";
import withActiveItem from "./components/hocs/with-active-item/with-active-item.jsx";
import withActiveState from "./components/hocs/with-active-state/with-active-state.jsx";

const AuthorizationStatus = {
  NO_AUTH: 401
};

const api = createAPI(() => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Operation.loadFilms());

const AppWrapped = withActiveState(withActiveItem(App));

ReactDOM.render(
    <Provider store={store}>
      <AppWrapped api={api} />
    </Provider>,
    document.querySelector(`#root`)
);
