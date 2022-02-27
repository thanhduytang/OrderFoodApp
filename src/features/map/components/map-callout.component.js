import React from "react";
import { CompactRestaurantInfo } from "../../restaurants/components/compact-restaurant.component";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
