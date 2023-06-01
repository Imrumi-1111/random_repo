import React from "react";
import styles from "./sidebar.module.css";
import SidebarOption from "../SidebarOption/sidebarOPtion";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
//import ColorToggleButton from "../../atoms/button/logout/logout";

function Sidebar({handleLogout}) {
 const navigate = useNavigate()
  return (
    <div className={styles.sidebar}>
      <TwitterIcon className={styles.sidebar_twitter_logo}/>
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <Button
        variant="outlined"
        className="sidebar-tweet-btn"
        fullWidth
        style={{
          backgroundColor: "var(--twitter-color)",
          border: "none",
          color: "white",
          fontWeight: "900",
          textTransform:"inherit",
          borderRadius:"30px",
          height:"50px",
          marginTop:"20px",
        }}
      >
        Tweet
      </Button>
      {/* <div className={styles.Logout}><ColorToggleButton/></div> */}
      <div className={styles.Logout}>
        <SidebarOption Icon={MoreHorizIcon} text="Logout"
      onClick = {() => {
        navigate("/logout");
        handleLogout()
      }}
      />
      </div>
    </div>
  );
}

export default Sidebar;
