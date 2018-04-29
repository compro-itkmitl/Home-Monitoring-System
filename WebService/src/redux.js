const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_DEVICES_LIST = 'SET_DEVICES_LIST';

const initialState = {
  login: false,
  user: {},
  devices: []
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
        user: {},
        login: false
      };
    case SET_DEVICES_LIST:
      return {
        ...state,
        devices: action.data
      };
    default:
      return state;
  }
};

export const setLogin = (data) => ({
  type: LOGIN,
  data
});

export const setDevicesList = (data) => ({
  type: SET_DEVICES_LIST,
  data
});

export const setLogout = () => ({
  type: LOGOUT
});
