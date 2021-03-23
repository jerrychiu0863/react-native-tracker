import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

// navigate
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return { ...state, errorMessage: action.payload };
    case 'SIGNIN':
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
    dispatch({ type: 'SIGNIN', payload: res.data.token });
    // Redirect users to Tracklist screen
    navigate('TrackList');
  } catch (e) {
    // if signup fails, reflect error messages
    dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    // Try to sign in
    const res = await trackerAPI.post('/signin', { email, password });
    await AsyncStorage.setItem('token', res.data.token);
    // Handle success and update state
    dispatch({ type: 'SIGNIN', payload: res.data.token });
    // Redirect users to Tracklist screen
    navigate('TrackList');
  } catch (e) {
    // Handle failure and reflect error messages
    dispatch({
      type: 'ADD_ERROR',
      payload: 'Something went wrong wtih signin',
    });
  }
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
