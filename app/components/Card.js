import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "./AppText";
import color from "../config/color";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ title, subtitle, imageUrl, thumbnailUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          uri={imageUrl}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          style={styles.image}
        />
        <View style={styles.deatilsContainer}>
          <AppText>
            {title}
          </AppText>
          <AppText style={styles.details}>
            {subtitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden"
  },
  details: {
    color: color.secondary,
    fontWeight: "bold",
    marginTop: 5
  },
  deatilsContainer: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 200
  }
});

export default Card;
