import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import color from "../config/color";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);
  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
      alert("You need to enable Permission to access Images");
  };
  const selectImage = async () => {
    try {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
      if (!response.canceled) onChangeImage(response.assets[0].uri);
    } catch (error) {
      console.log("Error selecting the image", error);
    }
  };
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Remove", "Are you sure you want to remove this Image", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" }
      ]);
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri &&
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={color.meduimGrey}
          />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 15,
    backgroundColor: color.lightGrey,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default ImageInput;
