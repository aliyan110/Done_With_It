import React from 'react';
import { useFormikContext } from 'formik';
import ErrorMessages from './ErrorMessages';

import AppTextInput from '../AppTextInput';

function AppFormField({name, ...otherProps}) {
    const {setFieldValue,values, setFieldTouched, touched, errors }= useFormikContext();
    return (
     
        <>
            <AppTextInput
            {...otherProps}
            onBlur={()=> setFieldTouched(name)}
            onChangeText={(text) => setFieldValue(name, text)}
            value = {values[name]}/>

            <ErrorMessages error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;