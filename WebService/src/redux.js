const LOGIN = 'LOGIN';

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
    default:
      return state;
  }
};

export const setLogin = (data) => ({
  type: LOGIN,
  data
});
