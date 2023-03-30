import apiClient from "./client";

const endpoint = "/users";

const register = usersInfo => apiClient.post(endpoint, usersInfo);

const getUserById = userId => apiClient.get(userId);

export default {
  register,
  getUserById
};
