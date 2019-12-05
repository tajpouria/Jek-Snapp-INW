export enum RestaurantsAPIS {
  GET_restaurants = "https://snappfood.ir/mobile/v2/restaurant/vendors-list"
}

export interface RestaurantsFilter {
  Filters: string[];
  Sortings: string[];
  Services: string[];
  ExtraFilter: string[];
}

export interface RestaurantParams {
  page?: number;
  page_size?: number;
  cityId?: number;
  areaName?: string;
  local?: string;
  lat?: number;
  long?: number;
  appVersion?: string;
  showNoOrder?: number;
  client?: "JEK";
  optionalClient?: "JEK";
  filters?: RestaurantsFilter;
}

export const fetchRestaurantsDefaultParams: RestaurantParams = {
  appVersion: "4.8.0",
  page: 0,
  page_size: 10,
  cityId: 1,
  local: "fa",
  lat: 35.689,
  long: 51.389,
  areaName: "حر",
  showNoOrder: 0,
  client: "JEK",
  optionalClient: "JEK",
  filters: {
    Filters: [],
    Sortings: [],
    Services: ["RESTAURANT"],
    ExtraFilter: []
  }
};

export interface Badge {
  title: string;
  description: string;
  image: string;
  white_image: string;
}
