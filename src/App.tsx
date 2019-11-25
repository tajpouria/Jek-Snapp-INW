import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { RestaurantPage } from "./pages";

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={RestaurantPage} />
        <Route render={() => <span>404</span>} />
      </Switch>
    </Router>
  );
};

export default App as React.FC<{}>;
