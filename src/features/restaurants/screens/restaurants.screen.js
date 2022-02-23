import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyles: {
    padding: 16,
  },
})`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  console.log(error);

  return (
    <SafeAreaProvider>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </SafeAreaProvider>
  );
};
