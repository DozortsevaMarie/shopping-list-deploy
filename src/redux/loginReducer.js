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

/*export const getAuthUserDataThunk = () => (dispatch) => {
  return authAPI.authorization().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email } = response.data.users;
      dispatch(setAuthUserData(id, email, true));
    }
  });
};*/

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(response.data.user.id, response.data.user.email, true));
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};
export default loginReducer;
