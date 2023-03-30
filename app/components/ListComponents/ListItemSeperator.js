import React from "react";
import { View, StyleSheet } from "react-native";

import color from "../../config/color";

function ListItemSeperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: color.lightGrey,
    alignSelf: "center"
  }
});

export default ListItemSeperator;
