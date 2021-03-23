import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';

// Context
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext);
  console.log(state.token);

  return (
    <View style={styles.conatiner}>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign in"
      />
      <NavLink
        text="Don't have an account? Go back to sign up!"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default SigninScreen;
