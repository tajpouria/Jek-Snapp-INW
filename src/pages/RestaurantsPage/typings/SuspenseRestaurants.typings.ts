import { SuspenseRestaurantsClassLevelAction } from ".";
import { fetchRestaurantsAction } from "../../../redux/actions/fetchRestaurants";

export interface SuspenseRestaurantsProps
  extends SuspenseRestaurantsClassLevelAction {}

export const mapDispatchToProps: SuspenseRestaurantsClassLevelAction = {
  fetchRestaurantsAction
};
