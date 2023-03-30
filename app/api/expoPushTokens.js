import apiClient from "./client";

const registerNotification = pushToken =>
  apiClient.post("/expoPushTokens", { token: pushToken });

export default {
  registerNotification
};
