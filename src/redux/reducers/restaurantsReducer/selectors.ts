import { RestaurantsGlobeStates } from "./typings";

export const getFilters = ({
  restaurants
}: {
  restaurants: RestaurantsGlobeStates;
}) => restaurants && restaurants.filters;
