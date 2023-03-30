import React from 'react';
import { Keyboard, Alert } from 'react-native';
import * as Notifications from "expo-notifications";
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppFormField from '../components/FormComponents/AppFormField';
import AppButton from '../components/AppButton';
import messagesApi from '../api/messages';

function ContactSellerForm({listing}) {

    const validationSchema= Yup.object().shape({
        message: Yup.string().required().min(1).label("Message"),        
    });

    const handleSent = async({message}, {resetForm}) => {
      Keyboard.dismiss();

      const result = await messagesApi.send(message, listing.id);

        // if (!result.ok) {
        //     console.log ('Error', result);
        //     return Alert.alert("Error", "Could not send message to the server");
        // };

        resetForm();

        Notifications.scheduleNotificationAsync({
            content:{
                title: "Awesome!",
                body: "Your Message has been sent to the seller successfully",
            },
            trigger: { seconds: 1 },
        }); 
    }

  return (
    <Formik
    initialValues={{ message:''}}
    onSubmit={handleSent}
    validationSchema={validationSchema}>
      {({handleSubmit})=> (
      <>
      <AppFormField
      name='message'
      multiline = {true}
      placeholder='Message'
      />

      <AppButton
      title='Send'
      onPress={handleSubmit}
      buttonWidth='50%'/>
      </>
      )}
    </Formik>
  );
};

export default ContactSellerForm;