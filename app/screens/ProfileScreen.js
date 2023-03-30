import React from "react";
import { Image, View, StyleSheet, FlatList } from "react-native";

import Icon from "../components/icon";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import color from "../config/color";
import Listing from "../components/ListComponents/Listing";
import ListItemSeperator from "../components/ListComponents/ListItemSeperator";
import useAuth from "../Auth/useAuth";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      title: "format-list-bulleted",
      backgroundColor: color.primary
    },
    targetScreen: "MyListings"
  },
  {
    title: "My Messages",
    icon: {
      title: "email",
      backgroundColor: color.secondary
    },
    targetScreen: "Messages"
  }
];

function ProfileScreen({ navigation }) {
  const { user, logOut } = useAuth();

  const username = user.name;
  const email = user.email;
  return (
    <Screen style={styles.background}>
      <View style={styles.profileContainer}>
        <Image source={require("../assets/user.png")} style={styles.image} />
        <View style={styles.detailsBox}>
          <AppText style={styles.username}>
            {username}
          </AppText>
          <AppText style={styles.email}>
            {email}
          </AppText>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItems => menuItems.title}
          renderItem={({ item }) =>
            <Listing
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.title}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <Listing
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor={color.logout} />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: color.lightGrey,
    flex: 1
  },
  detailsBox: {
    flexDirection: "column",
    padding: 5,
    justifyContent: "center"
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10
  },
  optionsContainer: {
    marginVertical: 20
  },
  profileContainer: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    marginTop: 10,
    padding: 15,
    backgroundColor: color.white
  },
  username: {
    fontSize: 24,
    fontWeight: "500"
  },
  email: {
    fontSize: 20,
    color: color.meduimGrey
  }
});

export default ProfileScreen;
