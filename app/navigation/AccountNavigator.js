import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MyListingsScreen from "../screens/MyListings";

const Stack = createStackNavigator();

const AccountNavigator = () =>
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="MyListings" component={MyListingsScreen} />
  </Stack.Navigator>;

export default AccountNavigator;
