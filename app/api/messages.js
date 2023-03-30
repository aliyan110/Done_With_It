import apiClient from "./client";

const send = (message, listingId) => {
  apiClient.post("/messages", {
    message,
    listingId
  });
  return { ok: true };
};

export default {
  send
};
