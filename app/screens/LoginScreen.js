import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { Formik} from "formik";
import * as Yup from "yup";


import Screen from "../components/Screen";
import color from "../config/color";
import AppButton from "../components/AppButton";
import AppFormField from "../components/FormComponents/AppFormField";
import ErrorMessages from "../components/FormComponents/ErrorMessages";
import Auth from "../api/Auth";
import useAuth from "../Auth/useAuth";

const validationSchema= Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label('Password')
});

function LoginScreen(props) {
  const auth= useAuth();
  const[loginFailed, setLoginFailed]= useState(false);

  const handelLogin = async({email, password}) => {
    const response = await Auth.login(email, password);
    if(!response.ok) {
      return setLoginFailed(true);
    }
    setLoginFailed(false);
    auth.logIn(response.data);
  }

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Formik
      initialValues={{ email:'', password:'' }}
      onSubmit={handelLogin}
      validationSchema={validationSchema}>
        {({ handleSubmit})=> (
        <>
        <ErrorMessages error='Invalid Email and/or Password' visible={loginFailed}/>
        <AppFormField
        name='email'
        iconName='email'
        iconSize={30}
        iconColor={color.primary}
        autoCorrect={false}
        autoCapitalize='none'
        keyboardType='email-address'
        placeholder='Email Adress'
       />

        <AppFormField
        name='password'
        iconName='lock'
        iconSize={30}
        iconColor={color.primary}
        autoCorrect={false}
        autoCapitalize='none'
        placeholder= 'Password'
        secureTextEntry
        />

        <AppButton
        title='LogIn'
        onPress={handleSubmit}/>
        </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1

  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 30,
  }
});

export default LoginScreen;
