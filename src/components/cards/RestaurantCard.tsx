import * as React from "react";
import v4 from "uuid/v4";

import { CardBadge, RateBadge } from "../../components";
import { Badge } from "../../abstract/apis/typings/restaurants";
import { SnappFoodIndicator } from "..";
import { enToIRNumberConvertor } from "../../abstract/utility/fetch/commons";

interface Props {
  children: {
    title: string;
    description: string;
    address: string;
    logo: string;
    commentCount: string;
    rate: number;
    badges: Badge[];
  };
}

export const RestaurantCard: React.FC<Props> = React.memo(
  ({
    children: { title, description, address, logo, rate, commentCount, badges }
  }) => {
    const renderBadges = () =>
      Array.isArray(badges) && badges.length
        ? badges.map((badge: Badge) => (
            <CardBadge key={v4()}>{badge.title}</CardBadge>
          ))
        : null;

    return (
      <div className="restaurant-card">
        <div className="restaurant-card__box">
          <div className="restaurant-card__details-box">
            <div>
              <React.Suspense fallback={<SnappFoodIndicator />}>
                <div
                  className="restaurant-card__logo"
                  style={{ backgroundImage: `url(${logo})` }}
                />
              </React.Suspense>
            </div>
            <div className="restaurant-card__desc-box">
              <h3 className="restaurant-card__res-desc--primary typo typo--primary">
                {title}
              </h3>
              <h5 className="restaurant-card__res-desc--secondary typo typo--secondary">
                {description}
              </h5>
              <h5 className="restaurant-card__res-desc--secondary typo typo--secondary">
                {address}
              </h5>
            </div>
          </div>
          <div className="restaurant-card__badge-box">
            <div className="restaurant-card__badges">{renderBadges()}</div>
            <div className="restaurant-card__rates">
              <span className="restaurant-card__comments">
                <span> {enToIRNumberConvertor(commentCount)}</span>نظر
              </span>
              <RateBadge rate={rate}>{enToIRNumberConvertor(rate)}</RateBadge>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
