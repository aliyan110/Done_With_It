import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import color from "../config/color";
import Card from "../components/Card";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import LoadingIndicator from "../components/LoadingIndicator";
import useAPI from "../hooks/useAPI";
import mylistingsApi from "../api/mylistings";

function MyListingsScreen({ navigation }) {
  const [showDetails, setShowDetails] = useState(false);
  const getMyListingsApi= useAPI(mylistingsApi.getMyListings);

  useEffect(() => {
    getMyListingsApi.request();
  }, []);

  return (
    <>
    <LoadingIndicator visible={getMyListingsApi.loading}/>
    <Screen style={styles.container}>
      {getMyListingsApi.error && (
      <>
        <View style={styles.errorBox}>
          <MaterialCommunityIcons name="alert-outline" size={80} color={color.danger}/>
          <AppText style={{marginTop: 10}}>Could not connect to the Server</AppText>
            {showDetails && (
              <AppText>{getMyListingsApi.errorDetails}</AppText>
            )}
          <View style={styles.buttonBox}>
            <AppButton title='Retry' buttonWidth='30%' onPress={getMyListingsApi.request}/>
            <AppButton title='Learn More' buttonWidth="30%" onPress={()=> setShowDetails(true)} backgroundColor={color.meduimGrey} />
          </View>
        </View>
      </>
      )}
       
        <FlatList
          data={getMyListingsApi.data}
          keyExtractor={listings => listings.id.toString()}
          renderItem={({ item }) =>
            <Card
              title={item.title}
              subtitle={"$" + item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl= {item.images[0].thumbnailUrl}
              onPress={() => navigation.navigate("itemDetails", item)}
            />}
        />
    </Screen>
    </>
  );
}

export default MyListingsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: color.lightGrey,
    flex:1
  },
  errorBox: {
    // flex:1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonBox: {
    flexDirection: "row",
    width: '80%',
    justifyContent: 'space-between',
    marginTop: 30
  },
  learnMoreButton: {
    backgroundColor: color.lightGrey,
    borderRadius: 30,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
