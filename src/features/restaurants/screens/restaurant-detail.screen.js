import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { OrderButton } from "../components/restaurant-list.styles";
import { colors } from "../../../infrastructure/theme/colors";

export const RestaurantDetailScreen = ({ navigation, route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <SafeArea>
      <ScrollView>
        <RestaurantInfoCard restaurant={restaurant} />
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          theme={{ colors: { primary: colors.brand.primary } }}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Classic Brekkie Rolls " />
          <Divider />
          <List.Item title="Vegan Brekkie Rolls" />
          <Divider />
          <List.Item title="Smash Avo" />
          <Divider />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          theme={{ colors: { primary: colors.brand.primary } }}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Angus Beef Burger with fries" />
          <Divider />
          <List.Item title="Morrocan Chicken Salad" />
          <Divider />
          <List.Item title="Fried Chicken Burger with fries" />
          <Divider />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          theme={{ colors: { primary: colors.brand.primary } }}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <Divider />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <Divider />
          <List.Item title="Steak Frites" />
          <Divider />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          theme={{ colors: { primary: colors.brand.primary } }}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <Divider />
          <List.Item title="Tea" />
          <Divider />
          <List.Item title="Sparkling Water" />
          <Divider />
          <List.Item title="Coke" />
          <Divider />
          <List.Item title="Fanta" />
        </List.Accordion>
        <Spacer position="top" size="large">
          <OrderButton
            mode="contained"
            icon="cash-usd"
            onPress={() => {
              addToCart({ item: "Special", price: 1299 }, restaurant);
              navigation.navigate("Checkout");
            }}
          >
            Order Special Only 12.99!
          </OrderButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
