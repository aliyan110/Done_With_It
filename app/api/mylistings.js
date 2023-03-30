import client from "./client";

const endPoint = "/my/listings";

const getMyListings = () => client.get(endPoint);

export default {
  getMyListings
};
