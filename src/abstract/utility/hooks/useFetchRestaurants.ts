import { useEffect, useState } from "react";
import axios from "axios";
import {
  RestaurantsAPIS,
  fetchRestaurantsDefaultParams,
  RestaurantParams
} from "../../../abstract/apis/typings/restaurants";

export const useFetchRestaurants = ({
  params: { page, ...params }
}: {
  params: RestaurantParams;
}) => {
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    let cancel: any;
    axios({
      url: RestaurantsAPIS.GET_restaurants,
      params: { ...fetchRestaurantsDefaultParams, ...{ ...params, page } },
      cancelToken: new axios.CancelToken(c => (cancel = c))
    })
      .then(res => {
        setRestaurants(
          (preRestaurants: any) =>
            [...preRestaurants, ...res.data.data.finalResult] as any
        );
        setHasMore(res.data.data.count > 0);
        setLoading(false);
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
      });
    return () => cancel();
  }, [page]);

  return { loading, restaurants, hasMore };
};
