import { all } from "redux-saga/effects";

import restaurantWatcher from "./fetchRestaurantsSaga";

export const rootSaga = function*() {
  yield all([restaurantWatcher()]);
};
