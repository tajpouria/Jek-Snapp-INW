// TODO: make it more dynamic

export enum RestaurantsAPIS {
  GET_restaurants = "https://snappfood.ir/mobile/v2/restaurant/vendors-list?areaName=%D8%AD%D8%B1&cityId=1&filters=%7B%22Filters%22:[],%22Sortings%22:[],%22Services%22:[%22RESTAURANT%22],%22ExtraFilter%22:[]%7D&extra-filter=&locale=fa&lat=35.689&long=51.389&page=1&page_size=10&query=&tag=&productName=&showNoOrder=0&local=fa&client=JEK&optionalClient=JEK&appVersion=4.8.0&optionalVersion=4.8.0"
}

export interface Badge {
  title: string;
  description: string;
  image: string;
  white_image: string;
}
