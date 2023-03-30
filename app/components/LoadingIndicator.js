import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

function LoadingIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/annimations/loader.json")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  overlay: {
    alignItems: "center",
    elevation: 1,
    justifyContent: "center",
    zIndex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    opacity: 0.7
  }
});

export default LoadingIndicator;
