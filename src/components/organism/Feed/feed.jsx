import React, { useEffect } from "react";
import styles from "./feed.module.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";

function Feed() {
  useEffect(() => {
    fetch("/MOCK_DATA.json")
      .then((data) => data.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div className={styles.feed}>
      <div className={styles.feed_header}>
        <h2>Feed</h2>
      </div>

      <TweetBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
