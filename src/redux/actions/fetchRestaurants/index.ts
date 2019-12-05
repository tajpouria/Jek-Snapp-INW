import { fetchRestaurantActionArg, FetchRestaurantsConstants } from "./typings";
import { RestaurantParams } from "../../../abstract/apis/typings/restaurants";

export const fetchRestaurantsAction = ({
  params
}: {
  params?: RestaurantParams;
}): fetchRestaurantActionArg => ({
  type: FetchRestaurantsConstants.FETCH_RESTAURANTS,
  payload: { params }
});
