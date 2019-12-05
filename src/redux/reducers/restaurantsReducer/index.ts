import produce from "immer";
import { FetchRestaurantsConstants } from "../../actions/fetchRestaurants/typings";
import {
  RestaurantsGlobeStates,
  RestaurantsAssociatedPayload
} from "./typings";

const initialState: RestaurantsGlobeStates = {
  useSuspense: true,
  restaurants: [],
  hasMore: false,
  loading: true,
  filters: {
    Filters: [],
    Sortings: [],
    Services: ["RESTAURANT"],
    ExtraFilter: []
  }
};

export const restaurants = (
  state = initialState,
  {
    type,
    payload
  }: {
    type: FetchRestaurantsConstants;
    payload: RestaurantsAssociatedPayload;
  }
) => {
  switch (type) {
    case FetchRestaurantsConstants.FETCH_RESTAURANTS: {
      return produce(state, draft => {
        draft.loading = true;
      });
    }
    case FetchRestaurantsConstants.FETCH_RESTAURANTS_SUCCESS: {
      let _restaurants: any = [];
      if (!state.filters!.Sortings.length && state.useSuspense) {
        _restaurants = state.restaurants;
      } else if (
        state.filters!.Sortings.length &&
        !state.useSuspense &&
        payload.filters!.Sortings[0] === state.filters!.Sortings[0]
      ) {
        _restaurants = state.restaurants;
      }

      return produce(state, draft => {
        draft.restaurants = [
          ...(_restaurants as any),
          ...payload.restaurants.data.finalResult
        ];
        draft.loading = false;
        draft.hasMore = payload.restaurants.data.count > 0;
        draft.useSuspense =
          payload.useSuspense && !state.filters!.Sortings.length;
        draft.filters = payload.filters ? payload.filters : state.filters;
      });
    }
    default:
      return state;
  }
};
