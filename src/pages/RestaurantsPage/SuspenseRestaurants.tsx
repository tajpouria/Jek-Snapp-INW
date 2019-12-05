import * as React from "react";
import { connect } from "react-redux";
import v4 from "uuid/v4";

import { RestaurantsAPIS } from "../../abstract/apis/typings/restaurants";
import { useFetchSuspense } from "../../abstract/utility/hooks/useFetchSuspense";
import { RestaurantCard } from "../../components";
import { calShouldRefetch } from "../../abstract/utility/fetch/commons";
import MultiImageLoader from "../../components/loading/MultiImageLoader";
import {
  mapDispatchToProps,
  SuspenseRestaurantsProps
} from "./typings/SuspenseRestaurants.typings";
import { RestaurantsGlobeStates } from "../../redux/reducers/restaurantsReducer/typings";

const SuspenseRestaurants = ({
  fetchRestaurantsAction,
  restaurants,
  loading,
  hasMore,
  useSuspense
}: SuspenseRestaurantsProps) => {
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    fetchRestaurantsAction!({ params: { page } });
  }, [page, fetchRestaurantsAction]);

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

  const renderRestaurants = (_restaurants: any[]) =>
    _restaurants.map(({ data }: { data: any }, index: number) =>
      data.image ? (
        <MultiImageLoader
          key={v4()}
          attr={{
            src: data.image,
            alt: data.title,
            height: "30%",
            width: "100%",
            effect: "blur"
          }}
        />
      ) : calShouldRefetch(_restaurants.length, index) ? (
        <div ref={lastRestaurantElementRef} key={v4()}>
          <RestaurantCard>{data}</RestaurantCard>
        </div>
      ) : (
        <RestaurantCard key={v4()}>{data}</RestaurantCard>
      )
    );

  return (
    <div className="restaurants">
      <span style={{ display: !useSuspense ? "none" : "inherit" }}>
        {renderRestaurants(
          useFetchSuspense(RestaurantsAPIS.GET_restaurants).data.finalResult
        )}
      </span>
      {renderRestaurants(restaurants as any[])}
    </div>
  );
};

export default connect(
  ({ restaurants }: RestaurantsGlobeStates) => ({ ...restaurants }),
  mapDispatchToProps
)(SuspenseRestaurants);
