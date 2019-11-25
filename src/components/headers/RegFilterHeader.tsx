import * as React from "react";

interface Props {}

export const RegFilterHeader: React.FC<Props> = () => {
  return (
    <section className="header ">
      <header className="header--reg-filter">
        <div className="header__around-box">
          <p className="header__around-static-title">اطراف شما</p>
          <p className="header__around-static-loc-box">
            <span>TICK</span>
          </p>
        </div>
        <div className="header__search-bar-box">
          <input type="search" />
        </div>
        <div className="header__categories--scroll-hor">
          fetch categories ?
        </div>
      </header>
    </section>
  );
};
