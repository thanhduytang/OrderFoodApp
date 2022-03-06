import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation/index";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBV5AR91XyYhTM0HKQrIDBPKWCY93xRuUk",
  authDomain: "foodorderapp-ca16e.firebaseapp.com",
  projectId: "foodorderapp-ca16e",
  storageBucket: "foodorderapp-ca16e.appspot.com",
  messagingSenderId: "65053015310",
  appId: "1:65053015310:web:4aed96fa3083cf70f7eb5f",
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
