import React from "react";
import { useFormikContext } from "formik";

import ErrorMessages from "./ErrorMessages";
import ImageInputList from "../ImageInputList";

function FormImagePicker({name}) {
    const {setFieldValue, touched, values, errors }= useFormikContext();
    const imageUris= values[name];
    const handelAdd = uri => {
        setFieldValue(name, [...imageUris, uri]);
      };
      const handelDelete = uri => {
        setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));
      };
  return(
    <>
     <ImageInputList
     imageUris={imageUris}
     onAddImage={handelAdd}
     onRemoveImage={handelDelete}/>
     <ErrorMessages error={errors[name]} visible={touched[name]}/>
    </>
    );
}

export default FormImagePicker;
