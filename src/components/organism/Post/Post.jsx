import React from "react";
import styles from "./Post.module.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({ name, userName, verified, text, image, avatar }) {
  return (
    <div className={styles.post}>
      <div className={styles.post_avatar}>
        <Avatar src="https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18665.jpg?size=626&ext=jpg&ga=GA1.1.1157341070.1685540418&semt=location_fest_v1"></Avatar>
      </div>
      <div className={styles.post_body}>
        <div className={styles.post_header}>
          <div className={styles.post_header_text}>
            <h3>
              Ayush Wasnik{" "}
              <span className={styles.post_header_special}>
                <VerifiedIcon className={styles.post_verified} />
              </span>
            </h3>
          </div>

          <div className={styles.post_header_desc}>
            <p>This is my Twitter Clone</p>
          </div>
        </div>
        <img src="https://media4.giphy.com/media/VaTY0AviQJDHWDeMdp/200w.webp?cid=ecf05e47doelc6reiwoacntswxbmeq0vwzfz1f4wl6pfwmox&ep=v1_gifs_trending&rid=200w.webp&ct=g" />

        <div className={styles.post_footer}>
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
