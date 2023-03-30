import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import color from "../../config/color";
import AppText from "../AppText";

function Listing({
  backgroundColor = color.white,
  title,
  subtitle,
  photo,
  IconComponent,
  onPress,
  renderRightActions,
  leftIconVisibility = false
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={color.lightGrey} onPress={onPress}>
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
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
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

export default Listing;
