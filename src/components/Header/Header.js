import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">共通ヘッダーだぜ</Link>
      </div>
      <div className={Style.item}>
        <form>
          <input type="text" placeholder="検索" />
          <button type="submit">
            <FontAwesomeIcon icon={faCoffee} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
