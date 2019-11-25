import { createStore, applyMiddleware } from "redux";
import createSageMiddleware from "redux-saga";

import { reducers } from "./reducers";
import { rootSaga } from "./sagas";

export const configureStore = (initialState: Record<string, any>) => {
  const sagaMiddleware = createSageMiddleware();
  const middleWareStack = [sagaMiddleware];

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleWareStack)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
