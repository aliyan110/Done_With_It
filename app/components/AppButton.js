import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import color from "../config/color";

function AppButton({
  title,
  onPress,
  buttonWidth = "100%",
  backgroundColor = color.primary
}) {
  return (
    <TouchableOpacity
      style={[styles.loginButton, { width: buttonWidth, backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    borderRadius: 30,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 18,
    color: color.white,
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});

export default AppButton;
