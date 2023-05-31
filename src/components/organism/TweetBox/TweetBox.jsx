import React from "react";
import styles from "./TweetBox.module.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className={styles.TweetBox}>
      <form>
        <div className={styles.tweetbox_input}>
          <Avatar src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1157341070.1685540418&semt=location_fest_v1"></Avatar>
          <input placeholder="Whats Happening" />
        </div>

        {/* <input
          className={styles.tweetbox_inputImage}
          placeholder="Optional : Enter image URL"
        /> */}
        
        <Button className={styles.TweetBox_TweetBtn}>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
