import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import AppText from "../components/AppText";

import color from "../config/color";
import defaultStyles from "../config/styles";

function WelcomScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.image}
        />
        <AppText style={styles.mainText}>Sell what you don't need</AppText>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.buttonText]}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default WelcomScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonText: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 25,
    color: "white",
    fontWeight: "bold"
  },
  mainText: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold"
  },
  image: {
    height: 100,
    width: 100
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  registerButton: {
    width: "90%",
    height: 60,
    backgroundColor: color.secondary,
    borderRadius: 30,
    margin: 25,
    padding: 12
  },
  loginButton: {
    width: "90%",
    height: 60,
    backgroundColor: color.primary,
    borderRadius: 30,
    padding: 12
  }
});
