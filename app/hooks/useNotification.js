import { useEffect } from "react";
import * as Notifications from "expo-notifications";

import expoPushTokensApi from "../api/expoPushTokens";
import navigation from "../navigation/rootNavigator";

export default (useNotification = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false
    })
  });

  useEffect(() => {
    registerForPushNotification();
    Notifications.addNotificationResponseReceivedListener(notification =>
      navigation.navigate("Account")
    );
  }, []);

  const registerForPushNotification = async () => {
    try {
      const permission = await Notifications.getPermissionsAsync();
      if (!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.registerNotification(token);
    } catch (error) {
      console.log("Error getting push Notification token", error);
    }
  };
});
