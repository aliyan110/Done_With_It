import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const prefix = "cache";
const expiryInMin = 5;
const store = async (key, value) => {
  try {
    const item = {
      value,
      timeStamp: Date.now()
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = item => {
  const now = dayjs();
  const StoreTime = dayjs(item.timeStamp);
  return now.diff(StoreTime, "minute") > expiryInMin;
};

const get = async key => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      // delibrately breaking Command Query Seperation(CQS) principle to clean cache
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get
};
