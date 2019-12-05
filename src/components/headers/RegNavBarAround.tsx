import * as React from "react";
import { __Base64 } from "../../assets/statics/base64";
import { fetchRestaurantsDefaultParams } from "../../abstract/apis/typings/restaurants";

export const RegNavBarAround: React.FC = () => {
  return (
    <div className="header__around-box">
      <p className="header__around-static-title">اطراف شما</p>
      <p className="header__around-static-loc-box">
        <span>{fetchRestaurantsDefaultParams.areaName}</span>
        <img alt="addresses" src={__Base64.addresses} />
      </p>
    </div>
  );
};
