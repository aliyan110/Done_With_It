import React, { useEffect } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from "react-native-expo-image-cache";
import usersApi from "../api/users";

import AppText from "../components/AppText";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/ListComponents/ListItem";
import color from "../config/color";

function ItemDetailsScreen({ route }) {
  const listing = route.params;
  useEffect(() => {
    getSenderApi.request(userEndpoint);
  }, []);

  const userEndpoint = `/user/${listing.userId}`;
  const getSenderApi = useAPI(usersApi.getUserById);
  const user = getSenderApi.data;

  if (user) {
    senderName = user.name;
    senderListings = user.listings;
  } else {
    senderName = "New User";
    senderListings = "##";
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image style={styles.image} uri={listing.images[0].url} tint="light" />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>
          {listing.title}
        </AppText>
        <AppText style={styles.price}>
          ${listing.price}
        </AppText>
        <ListItem
          title={senderName}
          subtitle={senderListings + " Listings"}
          photo={require("../assets/user.png")}
          leftIconVisibility={true}
        />
      </View>
      <View style={styles.messaging}>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  detailsContainer: {
    padding: 20
  },
  messaging: {
    padding: 20,
    alignItems: "flex-end"
  },
  title: {
    fontSize: 24,
    fontWeight: "500"
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: color.secondary
  }
});
export default ItemDetailsScreen;
