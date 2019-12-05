import { RestaurantParams } from "../../../abstract/apis/typings/restaurants";

export enum FetchRestaurantsConstants {
  FETCH_RESTAURANTS = "@@SNAPP_FOOD_CORE_FETCH_RESTAURANTS",
  FETCH_RESTAURANTS_SUCCESS = "@@SNAPP_FOOD_CORE_FETCH_RESTAURANTS_SUCCESS",
  FETCH_RESTAURANTS_FAILURE = "@@SNAPP_FOOD_CORE_FETCH_RESTAURANTS_FAILURE"
}

export interface fetchRestaurantActionArg {
  type: FetchRestaurantsConstants;
  payload: { sorting?: string; params?: RestaurantParams };
}
