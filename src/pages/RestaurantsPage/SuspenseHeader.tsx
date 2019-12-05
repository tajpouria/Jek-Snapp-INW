import * as React from "react";
import { connect } from "react-redux";

import { useFetchSuspense } from "../../abstract/utility/hooks/useFetchSuspense";
import { FiltersAPIS, FilterAPIRes } from "../../abstract/apis/typings/filters";
import { RegFilterHeader, SnappFoodIndicator } from "../../components";
import {
  mapDispatchToProps,
  SuspenseHeaderProps
} from "./typings/SuspenseHeader.typings";
import { fetchRestaurantsDefaultParams } from "../../abstract/apis/typings/restaurants";
import { RestaurantsGlobeStates } from "../../redux/reducers/restaurantsReducer/typings";

@(connect(
  ({ restaurants }: RestaurantsGlobeStates) => ({ ...restaurants }),
  mapDispatchToProps
) as any)
export default class SuspenseHeader extends React.PureComponent<
  SuspenseHeaderProps
> {
  public state = { showSpinner: false };
  public UNSAFE_componentWillReceiveProps(nextProps: SuspenseHeaderProps) {
    !nextProps.loading && this.setState({ showSpinner: false });
  }

  public render() {
    return (
      <>
        <RegFilterHeader
          sortings={
            useFetchSuspense<FilterAPIRes>(FiltersAPIS.GET_filters).data
              .restaurantFilterTypes[1].restaurantFilters
          }
          handleSortingElClick={this.handleSortingElClick}
        />
        {this.state.showSpinner && <SnappFoodIndicator />}
      </>
    );
  }
  private handleSortingElClick = (sorting?: string) => {
    const { filters, fetchRestaurantsAction } = this.props;
    this.setState({ showSpinner: true });

    filters && filters.Sortings[0] !== sorting
      ? fetchRestaurantsAction!({
          params: {
            filters: {
              ...fetchRestaurantsDefaultParams.filters,
              Sortings: [sorting]
            }
          } as any
        })
      : fetchRestaurantsAction!({
          params: {
            filters: {
              ...fetchRestaurantsDefaultParams.filters,
              Sortings: []
            } as any
          }
        });
  };
}
