import * as React from "react";

import SuspenseHeader from "./SuspenseHeader";
import { RestaurantsErrorBoundary } from "../../abstract/errorBoundries/RestaurantsErrorBoundary";
import { SnappFoodIndicator, RegNavBarAround } from "../../components";
import SuspenseRestaurants from "./SuspenseRestaurants";

export const RestaurantPage = () => {
  return (
    <RestaurantsErrorBoundary>
      <RegNavBarAround />
      <React.Suspense fallback={<SnappFoodIndicator />}>
        <SuspenseHeader />
      </React.Suspense>
      <React.Suspense fallback={<SnappFoodIndicator />}>
        <SuspenseRestaurants />
      </React.Suspense>
    </RestaurantsErrorBoundary>
  );
};
