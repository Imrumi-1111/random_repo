import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import TextField from "@mui/material/TextField";
import styles from "./ForgotPassword.module.css";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function ForgotPassword() {
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  
  function handleChange(e) {
    setpassword(e.target.value);
  }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <div
        style={{
          width: "550px",
          height: "600px",
          margin: "0 auto",
          height: "600px",
          background: "white",
          borderRadius: "20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <TwitterIcon
            sx={{ fontSize: 40 }}
            style={{ color: "rgb(29, 155, 240)" }}
          />
        </div>
        <div
          style={{
            width: "440px",
            margin: "0 auto",
            position: "relative",
            height: "500px",
          }}
        >
          <h1>Find your Twitter account</h1>
          Enter the email, phone number, or username associate with your account
          to change your password
          <div className={styles.textinput}>
            <TextField
              id="filled-multiline-flexible"
              fullWidth
              label="Email, phone number, or username"
              variant="filled"
            />
          </div>
          <Button className={styles.btn} variant="contained">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
