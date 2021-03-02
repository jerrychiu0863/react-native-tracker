import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      // make a api request to sign up with eamil and password
      const res = await trackerAPI.post('/signup', { email, password });
      console.log(res.data);
    } catch (e) {
      // if signup fails, reflect error messages
      console.log(e);
    }

    // if we sign up, modify our state, and say we are authenticated
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to sign in
    // Handle success and update state
    // Handle failure and reflect error messages
  };
};

const signout = (dispatch) => {
  return () => {
    // signout
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signup, signout },
  { isSignedIn: false }
);
