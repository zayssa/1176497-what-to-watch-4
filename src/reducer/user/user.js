import {extend} from "../../utils/extend";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: null
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_INFO: `SET_USER_INFO`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  setUserInfo: (userInfo) => {
    return {
      type: ActionType.SET_USER_INFO,
      payload: userInfo
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_USER_INFO:
      return extend(state, {
        userInfo: action.payload
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserInfo(response.data));
      })
      .catch((err) => {
        dispatch(ActionCreator.setUserInfo({}));
        throw err;
      });
  },

  login: (authData, onFail) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch(() => {
        onFail();
      });
  },
};


export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
