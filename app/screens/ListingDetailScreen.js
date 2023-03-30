import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import color from "../config/color";
import Card from "../components/Card";
import ListingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import LoadingIndicator from "../components/LoadingIndicator";
import useAPI from "../hooks/useAPI";

function ListingDetailScreen({ navigation }) {
  const [showDetails, setShowDetails] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const getListingsApi= useAPI(ListingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
    setRefreshing(false);
  }, [refreshing]);

  return (
    <>
    <LoadingIndicator visible={getListingsApi.loading}/>
    <Screen style={styles.container}>
      {getListingsApi.error && (
      <>
        <View style={styles.errorBox}>
          <MaterialCommunityIcons name="alert-outline" size={80} color={color.danger}/>
          <AppText style={{marginTop: 10}}>Could not connect to the Server</AppText>
            {showDetails && (
              <AppText>{getListingsApi.errorDetails}</AppText>
            )}
          <View style={styles.buttonBox}>
            <AppButton title='Retry' buttonWidth='30%' onPress={getListingsApi.request}/>
            <AppButton title='Learn More' buttonWidth="30%" onPress={()=> setShowDetails(true)} backgroundColor={color.meduimGrey} />
          </View>
        </View>
      </>
      )}
       
        <FlatList
          data={getListingsApi.data}
          keyExtractor={listings => listings.id.toString()}
          renderItem={({ item }) =>
            <Card
              title={item.title}
              subtitle={"$" + item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl= {item.images[0].thumbnailUrl}
              onPress={() => navigation.navigate("itemDetails", item)}
            />}
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
          
        />
    </Screen>
    </>
  );
}

export default ListingDetailScreen;

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
