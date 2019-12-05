import { put, takeLatest, select } from "redux-saga/effects";
import axios from "axios";

import { getFilters } from "../../reducers/restaurantsReducer/selectors";
import {
  fetchRestaurantsDefaultParams,
  RestaurantsAPIS
} from "../../../abstract/apis/typings/restaurants";
import {
  FetchRestaurantsConstants,
  fetchRestaurantActionArg
} from "../../actions/fetchRestaurants/typings";

function* fetchRestaurantsWatcher({
  payload: { params }
}: fetchRestaurantActionArg) {
  let cancel: any;

  try {
    const filters = yield select(getFilters);
    const res = yield axios({
      url: RestaurantsAPIS.GET_restaurants,
      params: {
        ...fetchRestaurantsDefaultParams,
        ...{
          ...params,
          filters: params && params.filters ? params.filters : filters
        }
      },
      cancelToken: new axios.CancelToken(c => (cancel = c))
    });

    yield put({
      type: FetchRestaurantsConstants.FETCH_RESTAURANTS_SUCCESS,
      payload: {
        restaurants: res.data,
        useSuspense: !!!params!.filters,
        filters: params && params.filters ? params.filters : filters
      }
    });
  } catch (e) {
    yield put({ type: FetchRestaurantsConstants.FETCH_RESTAURANTS_FAILURE });
    if (axios.isCancel(e)) return;
  }
  cancel();
}

export default function*() {
  yield takeLatest(
    FetchRestaurantsConstants.FETCH_RESTAURANTS,
    fetchRestaurantsWatcher
  );
}
