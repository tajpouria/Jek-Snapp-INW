import * as React from "react";

import { ErrorBoundary } from "../../abstract/errorBoundries/RestaurantsErrorBoundary";
import { SnappFoodIndicator } from "../../components";
import { SuspenseRestaurants } from "./SuspenseRestaurants";

export const RestaurantPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={SnappFoodIndicator}>
        <SuspenseRestaurants />
      </React.Suspense>
    </ErrorBoundary>
  );
};
