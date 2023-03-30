import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import color from "../config/color";

function AppTextInput({
  iconName,
  iconSize = 40,
  iconColor = color.meduimGrey,
  width = "100%",
  ...otherProps
}) {
  return (
    <View
      style={{
        width: width,
        borderRadius: iconSize,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: color.lightGrey,
        padding: 10,
        marginVertical: 10
      }}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={iconSize}
        color={iconColor}
      />
      <TextInput
        placeholderTextColor={color.meduimGrey}
        style={[defaultStyles.text, styles.textInput]}
        {...otherProps}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  textInput: {
    marginLeft: 10,
    flex: 1
  }
});

export default AppTextInput;
