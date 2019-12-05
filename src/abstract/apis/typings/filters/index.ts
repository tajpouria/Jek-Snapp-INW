export enum FiltersAPIS {
  GET_filters = "https://snappfood.ir/mobile/v2/restaurant/filters"
}

export interface Sorting {
  value: "sortings";
  title: "مرتب‌سازی";
  isSingleChoice: true;
  restaurantFilters: [
    {
      title: "بالاترین امتیاز";
      value: "max_rate";
    },
    {
      title: "نزدیک‌ترین";
      value: "nearest";
    },
    {
      title: "ارزان‌ترین";
      value: "least_expensive";
    },
    {
      title: "عملکرد کلی";
      value: "top_performance";
    },
    {
      title: "بهترین کوپن";
      value: "coupon_discount";
    },
    {
      title: "گران‌ترین";
      value: "most_expensive";
    }
  ];
}

export interface Filters {
  value: "filters";
  title: "فیلتر";
  isSingleChoice: true;
  restaurantFilters: [
    {
      title: "دارای کوپن";
      value: "has_coupon";
    },
    {
      title: "دارای تخفیف";
      value: "has_discount";
    },
    {
      title: "اسنپ‌اکسپرس";
      value: "zf_express";
    },
    {
      title: "ارسال رایگان";
      value: "free_delivery";
    },
    {
      title: "ایرانی";
      value: "cuisineId-2";
    },
    {
      title: "فست‌فود";
      value: "cuisineId-11";
    }
  ];
}

export interface FilterAPIRes {
  status: boolean;
  data: {
    restaurantFilterTypes: [Filters, Sorting];
  };
}
