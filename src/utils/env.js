import { Platform } from "react-native";

const liveHost = "https://us-central1-foodorderapp-ca16e.cloudfunctions.net";
const localHost =
  "https://741d-113-170-144-251.ngrok.io/foodorderapp-ca16e/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
