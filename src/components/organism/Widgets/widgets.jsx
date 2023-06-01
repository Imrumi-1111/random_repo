import React, { Fragment } from "react";
import styles from "./widgets.module.css"
import SearchBarTwitter from "../../atoms/searchbar/searchbar";
import Trending from "../../molecules/trending/trending";
import Follow from "../../molecules/follow/follow";

function Widgets() {
  return (
    
      <Fragment>
        <div className={styles.Home}>
          <div className={styles.SearchBarTwitter}>
            <SearchBarTwitter />
          </div>
          <div className={styles.Trending}>
            <Trending />
          </div>
          <div className={styles.Follow}><Follow/></div>
        </div>
      </Fragment>
    
  );
}

export default Widgets;
