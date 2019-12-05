import { fetchRestaurantsAction } from "../../../redux/actions/fetchRestaurants";
import { RestaurantsGlobeStates } from "../../../redux/reducers/restaurantsReducer/typings";

export interface SuspenseRestaurantsClassLevelAction
  extends RestaurantsGlobeStates {
  fetchRestaurantsAction?: typeof fetchRestaurantsAction;
}

export const mapDispatchToProps: SuspenseRestaurantsClassLevelAction = {
  fetchRestaurantsAction
};
