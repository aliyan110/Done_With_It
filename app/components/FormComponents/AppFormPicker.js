import { useFormikContext } from 'formik';
import React from 'react';
import AppPicker from '../AppPicker';
import ErrorMessages from './ErrorMessages';

function AppFormPicker({items, name, placeholder,PickerItemType, ...otherProps}) {
    const{errors, setFieldValue, touched, values}= useFormikContext()
    return (
     <>
     <AppPicker
     items={items}
     PickerItemType={PickerItemType}
     onSelectItem={(item)=> setFieldValue(name, item)}
     selectedItem={values[name]}
     placeholder={placeholder}
     {...otherProps}/>
     <ErrorMessages error={errors[name]} visible={touched[name]}/>
     </>
    );
}

export default AppFormPicker;