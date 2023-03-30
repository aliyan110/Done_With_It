import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import color from "../config/color";
import AppText from "./AppText";

function InternetNotice(props) {
  const NetInfo = useNetInfo();

  if (NetInfo.type !== "unknown" && NetInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: color.danger,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    elevation: 1,
    zIndex: 1,
    width: "100%"
  },
  text: {
    color: color.white,
    fontWeight: "500"
  }
});

export default InternetNotice;
