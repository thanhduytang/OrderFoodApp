import { FlatList } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyles: {
    padding: 16,
  },
})`
  padding: ${(props) => props.theme.space[3]};
`;

export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary,
  labelStyle: { color: "white" },
})`
  padding: ${(props) => props.theme.space[2]};
  width: 80%;
  align-self: center;
`;
