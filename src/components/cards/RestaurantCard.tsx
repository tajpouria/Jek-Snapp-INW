import * as React from "react";

import { CardBadge, BadgeTypes } from "../../components";
import { Badge } from "../../abstract/apis/typings/restaurants";
import { SnappFoodIndicator } from "../";
import uuid from "uuid";
const MultiImageLoader = React.lazy(() =>
  import("../loading/MultiImageLoader")
);

interface Props {
  children: {
    title: string;
    description: string;
    address: string;
    logo: string;
    voteCount: number;
    rate: number;
    badges: Badge[];
  };
}

export const RestaurantCard: React.FC<Props> = ({
  children: { title, description, address, logo, rate, voteCount, badges }
}) => {
  const renderBadges = () =>
    Array.isArray(badges) && badges.length
      ? badges.map((badge: Badge) => (
          <CardBadge key={uuid.v4()} bType={BadgeTypes.secondary}>
            {badge.title}
          </CardBadge>
        ))
      : null;

  return (
    <section className="restaurant-card">
      <div className="restaurant-card__details-box">
        <div className="restaurant-card__desc-box">
          <h4 className="restaurant-card__res-desc--secondary">{title}</h4>
          <h4 className="restaurant-card__res-desc--secondary">
            {description}
          </h4>
          <h4 className="restaurant-card__res-desc--secondary">{address}</h4>
        </div>
        <div className="restaurant-card__logo-box">
          <React.Suspense fallback={<SnappFoodIndicator />}>
            <MultiImageLoader
              attr={{
                src: logo,
                alt: `لوگوی ${logo}`,
                height: "30%",
                width: "30%"
              }}
            />
          </React.Suspense>
        </div>
      </div>
      <div className="restaurant-card__badge-box">
        <div className="restaurant-card__rates">
          <CardBadge bType={BadgeTypes.primary}>{rate}</CardBadge>
          <span className="restaurant-card__vote">رای{voteCount}</span>
        </div>
        <div className="restaurant-card__tags">{renderBadges()}</div>
      </div>
    </section>
  );
};
