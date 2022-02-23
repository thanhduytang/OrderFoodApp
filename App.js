import React from "react";
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/index";
import { SafeArea } from "./src/components/utils/safe-area.component";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";

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

  const Tab = createBottomTabNavigator();
  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };

  const tabBarIcon =
    (iconName) =>
    ({ size, color }) =>
      <Ionicons name={iconName} size={size} color={color} />;

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      headerShown: false,
      tabBarIcon: tabBarIcon(iconName),
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: [
        {
          display: "flex",
        },
        null,
      ],
    };
  };

  const Map = () => (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );

  const Settings = () => (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
