import { Platform } from "react-native";

const liveHost = "https://us-central1-foodorderapp-ca16e.cloudfunctions.net";
const localHost =
  "https://741d-113-170-144-251.ngrok.io/foodorderapp-ca16e/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;

export const firebaseSettings = {
  apiKey: "AIzaSyBV5AR91XyYhTM0HKQrIDBPKWCY93xRuUk",
  authDomain: "foodorderapp-ca16e.firebaseapp.com",
  projectId: "foodorderapp-ca16e",
  storageBucket: "foodorderapp-ca16e.appspot.com",
  messagingSenderId: "65053015310",
  appId: "1:65053015310:web:4aed96fa3083cf70f7eb5f",
};
