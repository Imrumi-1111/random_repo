import React, { Fragment } from "react";
import styles from "./widgets.module.css"
import SearchBarTwitter from "../../atoms/searchbar/searchbar";
import Trending from "../../molecules/trending/trending";

function Widgets() {
  return (
    <div>
      <Fragment>
        <div className={styles.Home}>
          <div className={styles.SearchBarTwitter}>
            <SearchBarTwitter />
          </div>
          <div className={styles.Trending}>
            <Trending />
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default Widgets;
