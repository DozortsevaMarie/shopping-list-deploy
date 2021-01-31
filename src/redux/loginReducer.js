import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  login: null,
  isAuth: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default: {
      return state;
    }
  }
};

const setAuthUserData = (userId, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, login, isAuth },
});

export const logIn = (email, password, rememberMe) => (dispatch) => {
  authAPI.logIn(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(
        setAuthUserData(response.data.user.id, response.data.user.email, true)
      );
    }
  });
};

export const logOut = () => (dispatch) => {
  authAPI.logOut().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, false));
    }
  });
};
export default loginReducer;
