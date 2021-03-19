import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

// Components
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';

// Context
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.conatiner}>
      <AuthForm
        headerText="Sign Up For Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Sign up"
      />
      <NavLink
        text="Already have an account? Sign in instead!"
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default SignupScreen;
