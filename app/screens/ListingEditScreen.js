import React,{useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppFormField from '../components/FormComponents/AppFormField';
import Screen from '../components/Screen';
import AppFormPicker from '../components/FormComponents/AppFormPicker';
import AppButton from '../components/AppButton';
import CategoryPickerItem from '../components/FormComponents/CategoryPickerItem';
import FormImagePicker from '../components/FormComponents/FormImagePicker';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';
import UploadScreen from './UploadScreen';
import useAuth from '../Auth/useAuth';

const validationSchema= Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.string().required().max(8).label("Price"),
    description: Yup.string().max(1000).label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1, "Please select atleast one Image")
    
});

const categories=[
    {value: 1 , label: 'Furniture', icon: 'floor-lamp', backgroundColor: '#fc5c65'},
    {value: 2 , label: 'Cars ', icon: 'car', backgroundColor: '#fd9644'},
    {value: 3 , label: 'Movies & Music', icon: 'headphones', backgroundColor: '#4b7bec'},
    {value: 4 , label: 'Cameras', icon: 'camera', backgroundColor: '#fed330'},
    {value: 5 , label: 'Clothing', icon: 'shoe-heel', backgroundColor: '#2bcbba'},
    {value: 6 , label: 'Sports', icon: 'basketball', backgroundColor: '#45aaf2'},
    {value: 7 , label: 'Games', icon: 'cards', backgroundColor: '#26de81'},
]


function ListingEditScreen() {
  // const location= useLocation();
  const[progressVisible, setProgressVisible] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  const {user}  = useAuth();
  const userId = user.userId;

  
  const handlePost = async (listing, {resetForm})=> {
    setUploadProgress(0);
    setProgressVisible(true);

    const result = await listingsApi.addListing(
      {...listing }, 
      userId,
      (progress) => setUploadProgress(progress)
      );
    

    if(!result.ok) {
      setProgressVisible(false);
      return alert('Could not save the listing');
      };
      resetForm();
  };

    return (
      <Screen style={styles.container}>
        <UploadScreen onDone={()=> setProgressVisible(false)} visible={progressVisible} uploadProgress={uploadProgress}/>
        <Formik
      initialValues={{ title:'', price:'', category:null, description:'',images:[] }}
      onSubmit={handlePost}
      validationSchema={validationSchema}>
        {({handleSubmit})=> (
        <>
        <FormImagePicker name='images'/>
        <AppFormField
        name='title'
        autoCapitalized='words'
        placeholder='Title'
       />

        <AppFormField
        name='price'
        placeholder='Price'
        width='40%'
        keyboardType="numeric"
       />

        <AppFormPicker
        name='category'
        placeholder='Category'
        numColumns={3}
        PickerItemType= {CategoryPickerItem}
        width='50%'
        items={categories}/>

        <AppFormField
        name='description'
        multiline
        numberOfLines= {3}
        placeholder='Description'/>

        <AppButton
        title='Post'
        onPress={handleSubmit}/>
        </>
        )}
      </Formik>
      </Screen>
    );
}

const styles = StyleSheet.create({
  container:{
    padding: 10,
  }
})

export default ListingEditScreen;