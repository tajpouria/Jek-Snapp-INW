import { RestaurantsFilter } from "../../../abstract/apis/typings/restaurants";

export interface RestaurantsGlobeStates {
  useSuspense?: boolean;
  restaurants?: any[] | { data: any };
  hasMore?: boolean;
  loading?: boolean;
  filters?: RestaurantsFilter;
}

export interface RestaurantsAssociatedPayload extends RestaurantsGlobeStates {
  restaurants: { data: any };
}
