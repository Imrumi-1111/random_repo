import React from "react";
import styles from "./home.module.css";
import Sidebar from "../../organism/Sidebar/sidebar";
import Feed from "../../organism/Feed/feed";
import Widgets from "../../organism/Widgets/widgets"

const Home = () => {
  return (
    <div className={styles.homepage}>
      <Sidebar />
      <Feed />
      <Widgets/>
    </div>
  );
};

export default Home;
