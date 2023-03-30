import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../config/color";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="close"
        style={styles.closeButton}
        size={35}
      />
      <MaterialCommunityIcons
        name="trash-can-outline"
        style={styles.deleteButton}
        size={35}
      />
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.black,
    flex: 1
  },
  closeButton: {
    position: "absolute",
    color: color.red,
    right: 30,
    top: 60
  },
  deleteButton: {
    position: "absolute",
    color: color.white,
    left: 30,
    top: 60
  },
  image: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    alignSelf: "flex-end"
  }
});
