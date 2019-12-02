import * as React from "react";
import uuid from "uuid";

import { ErrorBoundary } from "../../abstract/errorBoundries/RestaurantsErrorBoundary";
import { SnappFoodIndicator, RestaurantCard } from "../../components";
import { SuspenseRestaurants } from "./SuspenseRestaurants";
import { useFetchRestaurants } from "../../abstract/utility/hooks/useFetchRestaurants";
import { calShouldRefetch } from "../../abstract/utility/fetch/commons";

export const RestaurantPage: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const { restaurants, hasMore, loading } = useFetchRestaurants({
    params: {
      page
    }
  });

  const observer = React.useRef() as any;
  const lastRestaurantElementRef = React.useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(prevPage => prevPage + 1);
        }
      });
      if (node) observer.current!.observe(node);
    },
    [loading, hasMore, observer]
  );

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<SnappFoodIndicator />}>
        <SuspenseRestaurants />
      </React.Suspense>
      {restaurants.map(({ data }: { data: any }, index) => {
        return calShouldRefetch(restaurants.length, index) ? (
          <div ref={lastRestaurantElementRef} key={uuid.v4()}>
            <RestaurantCard>{data}</RestaurantCard>
          </div>
        ) : (
          <RestaurantCard key={uuid.v4()}>{data}</RestaurantCard>
        );
      })}
    </ErrorBoundary>
  );
};
