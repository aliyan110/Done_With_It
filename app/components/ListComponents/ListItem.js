import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../../config/color";
import AppText from "../AppText";

function ListItem({
  backgroundColor = color.white,
  title,
  subtitle,
  photo,
  IconComponent,
  leftIconVisibility = false
}) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {IconComponent}
      {photo && <Image source={photo} style={styles.image} />}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        {subtitle &&
          <AppText style={styles.subtitle} numberOfLines={3}>
            {subtitle}
          </AppText>}
      </View>
      {leftIconVisibility
        ? <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={color.meduimGrey}
          />
        : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center"
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35
  },
  detailsContainer: {
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 5
  },
  subtitle: {
    fontSize: 18,
    color: color.meduimGrey
  }
});

export default ListItem;
