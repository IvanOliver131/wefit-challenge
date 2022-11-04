import { storage } from "../storage";

export async function SaveDataInStorage(key: string, data) {
  await storage.save({
    key,
    data,
  });
}
