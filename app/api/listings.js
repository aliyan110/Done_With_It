import client from "./client";

const endPoint = "/listings";

const getListings = () => client.get(endPoint);

const getCategories = () => client.get("/categories");

const addListing = (listing, userId, uploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("userId", userId);
  data.append("description", listing.description);
  listing.images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      uri: image,
      type: "image/jpeg"
    });
  });
  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }

  return client.post(endPoint, data, {
    onUploadProgress: progress =>
      uploadProgress(progress.loaded / progress.total)
  });
};

export default {
  addListing,
  getListings,
  getCategories
};
