import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storage = new Storage({
  size: 1000,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  storageBackend: AsyncStorage,
  sync: {},
});
