import { storage } from "../storage";

export async function GetDataInStorage(key: string) {
  return await storage.load({ key });
}
