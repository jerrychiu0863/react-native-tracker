import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

// navigate
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return { ...state, errorMessage: action.payload };
    case 'SIGNUP':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    // make a api request to sign up with eamil and password
    const res = await trackerAPI.post('/signup', { email, password });
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({ type: 'SIGNUP', payload: res.data.token });

    navigate('TrackList');
  } catch (e) {
    // if signup fails, reflect error messages
    dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    console.log(e)
  }
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
  { token: null, errorMessage: '' }
);
