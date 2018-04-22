const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialState = {
  login: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.data,
        login: true
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        login: false
      };
    default:
      return state;
  }
};

export const setLogin = (data) => ({
  type: LOGIN,
  data
});

export const setLogout = () => ({
  type: LOGOUT
});
