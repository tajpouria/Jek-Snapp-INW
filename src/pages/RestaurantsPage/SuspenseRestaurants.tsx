import * as React from "react";

import { useFetchSuspense } from "../../abstract/utility/hooks/useFetchSuspense";
import { RestaurantsAPIS } from "../../abstract/apis/typings/restaurants";
import { RestaurantCard, RegFilterHeader } from "../../components";
import uuid from "uuid";

export const SuspenseRestaurants: React.FC = () => {
  return (
    <section className="restaurants">
      <RegFilterHeader />
      {useFetchSuspense(RestaurantsAPIS.GET_restaurants).data.finalResult.map(
        (result: any) => {
          const { data } = result;
          return <RestaurantCard key={uuid.v4()}>{data}</RestaurantCard>;
        }
      )}
    </section>
  );
};
