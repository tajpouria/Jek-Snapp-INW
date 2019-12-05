import { SuspenseRestaurantsClassLevelAction } from ".";
import { fetchRestaurantsAction } from "../../../redux/actions/fetchRestaurants";

export interface SuspenseHeaderProps
  extends SuspenseRestaurantsClassLevelAction {}

export const mapDispatchToProps: SuspenseRestaurantsClassLevelAction = {
  fetchRestaurantsAction
};
