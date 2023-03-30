import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import color from '../config/color';

import Screen from '../components/Screen';
import AppFormField from '../components/FormComponents/AppFormField';
import AppButton from '../components/AppButton';
import usersApi from '../api/users';
import authApi from '../api/Auth';
import useAuth from '../Auth/useAuth';
import ErrorMessages from '../components/FormComponents/ErrorMessages';
import useAPI from '../hooks/useAPI';
import LoadingIndicator from '../components/LoadingIndicator';

const validationSchema= Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label('Password'),
    
});


function RegistrationScreen(props) {
  const [error, setError] = useState();
  const auth = useAuth();
  const registerApi = useAPI(usersApi.register);
  const logInApi = useAPI(authApi.login);

  const handleRegister = async(usersInfo) => {
    const result= await registerApi.request(usersInfo);
    if (!result.ok) { 
      if (result.data) setError(result.data.error);
      else{
      setError("An Unexpected Error Occured");
      console.log(error);
      };
      return;
    }
    const { data: authToken } = await logInApi.request(
      usersInfo.email,
      usersInfo.password,
    );
      auth.logIn(authToken);

  }

    return (
      <>
      <LoadingIndicator visible={registerApi.loading || logInApi.loading}/>
      <Screen style={styles.container}>
        <Formik
      initialValues={{ name:'', email:'', password:''}}
      onSubmit={handleRegister}
      validationSchema={validationSchema}>
        {({handleSubmit})=> (
        <>
        <ErrorMessages error={error} visible={error}/>
        <AppFormField
        name='name'
        iconName='account'
        iconSize={30}
        iconColor={color.meduimGrey}
        autoCorrect={false}
        autoCapitalize='words'
        placeholder='Name'
       />

        <AppFormField
        name='email'
        iconName='email'
        iconSize={30}
        iconColor={color.meduimGrey}
        autoCorrect={false}
        autoCapitalize='none'
        keyboardType='email-address'
        placeholder='Email Adress'
       />

        <AppFormField
        name='password'
        iconName='lock'
        iconSize={30}
        iconColor={color.meduimGrey}
        autoCorrect={false}
        autoCapitalize='none'
        secureTextEntry
        placeholder='Password'/>

        <AppButton
        title='Register'
        onPress={handleSubmit}/>
        </>
        )}
      </Formik>
      </Screen>
      </>
    );
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 10,
  }
})
export default RegistrationScreen;