import * as React from "react";

import SFRoundLogo from "../../assets/statics/png/sf-round-logo.png";
import { ReactComponent as SFSpinner } from "../../assets/statics/svg/sf-spinner.svg";

export const SnappFoodIndicator: React.FC = React.memo(() => {
  return (
    <div className="sf-indicator">
      <div className="sf-indicator__box">
        <img
          src={SFRoundLogo}
          alt="لطفا صبر کنید"
          className="sf-indicator__sf-round-logo"
        />
        <SFSpinner className="sf-indicator__sf-spinner" />
      </div>
    </div>
  );
});
