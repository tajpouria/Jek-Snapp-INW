import * as React from "react";

import { BadgeTypes } from "./typings";

interface Props {
  children: string | number;
  bType: BadgeTypes;
}

export const CardBadge: React.FC<Props> = ({ children }, bType) => {
  return (
    <div className="card-badge">
      <p className={`card-badge--${bType}`}>{children}</p>
    </div>
  );
};
