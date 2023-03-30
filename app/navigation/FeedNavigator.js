import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import ItemDetailsScreen from "../screens/ItemDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () =>
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingDetailScreen} />
    <Stack.Screen name="itemDetails" component={ItemDetailsScreen} />
  </Stack.Navigator>;

export default FeedNavigator;
