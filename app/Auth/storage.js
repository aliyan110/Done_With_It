import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";
const storeToken = async authToken => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("error storing the AuthToken", error);
  }
};

const getToken = async () => {
  try {
    return (authToken = SecureStore.getItemAsync(key));
  } catch (error) {
    console.log("error getting authToke", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  if (token) return jwtDecode(token);
  return null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("error removing the authToken", error);
  }
};

export default {
  getUser,
  removeToken,
  storeToken,
  getToken
};
