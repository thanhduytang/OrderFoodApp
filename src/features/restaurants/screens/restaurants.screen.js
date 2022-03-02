import React, { useState, useContext } from "react";
import { Colors, ActivityIndicator } from "react-native-paper";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyles: {
    padding: 16,
  },
})`
  padding: ${(props) => props.theme.space[3]};
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={Colors.blue300} />
          </LoadingContainer>
        )}
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggled={() => setIsToggled(!isToggled)}
        />
        {isToggled && <FavouritesBar />}
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </SafeAreaProvider>
  );
};
