import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { RestaurantPage } from "./pages";
import { configureStore } from "./redux/store";

export const App: React.FC = () => {
  return (
    <Provider store={configureStore({})}>
      <Router>
        <Switch>
          <Route path="/" exact component={RestaurantPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App as React.FC;
