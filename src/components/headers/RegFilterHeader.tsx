import * as React from "react";
import cx from "classnames";

import { ReactComponent as IconFinder } from "../../assets/statics/svg/iconfinder.svg";

interface Props {
  sortings: { title: string; value: string }[];
  handleSortingElClick: (sortingValue: string) => void;
}

export const RegFilterHeader: React.FC<Props> = React.memo(
  ({ sortings, handleSortingElClick }) => {
    const [visible, setVisible] = React.useState(true);
    const [active, setActive] = React.useState("");

    const _handleSortingElClick = (
      evt: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
      const _id = evt.currentTarget.dataset.id!;
      handleSortingElClick(_id);
      setActive(prevSt => (prevSt === _id ? "" : _id));
    };

    const [prevScrollpos, setPrevScrollpos] = React.useState(
      window.pageYOffset
    );

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const _visible = prevScrollpos > currentScrollPos;

      setPrevScrollpos(currentScrollPos);

      !_visible
        ? window.pageYOffset >= 110
          ? setVisible(false)
          : setVisible(true)
        : setVisible(_visible);
    };

    React.useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
      <header
        className={cx("header header--reg-filter", {
          "header--reg-filter--unVisible": !visible
        })}
      >
        <div className="header__search-bar-box">
          <div className="searchbar">
            <label htmlFor="search"></label>
            <input
              name="search"
              className="searchbar__inp"
              type="search"
              placeholder="جست‌وجو غذا، رستوران و ..."
              readOnly
            />
            <IconFinder className="searchbar__icon" />
          </div>
        </div>
        <div className="header__sorting-box">
          <ul className="header__sorting-list scroll scroll--hor">
            {Array.isArray(sortings) && sortings.length
              ? sortings.map(el => (
                  <li
                    className={cx("header__sorting-elem", {
                      "header__sorting-elem--active": active === el.value
                    })}
                    data-id={el.value}
                    key={el.title}
                    onClick={_handleSortingElClick}
                  >
                    {el.title}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </header>
    );
  }
);
