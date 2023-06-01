import React from "react";
import GoogleButton from "../../atoms/button/google";
import AppleButton from "../../atoms/button/apple";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FaTwitter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [usererr, setusererr] = useState(false);
  const [data, setdata] = useState([]);
  const [alert, setalert] = useState(false);

  function forgothandle() {
    navigate("/forgot");
  }

  function userHandle(e) {
    setdata(e.target.value);
    setEmail(e.target.value);
  }

  function handlenavigate() {
    navigate("/password");
  }

  function onclick() {
    localStorage.setItem("email", email);

    if (data.length < 10) {
      setusererr(false);
      setalert(true);
    } else {
      setusererr(true);
    }
  }

  return (
    <div>
      <div className={styles.page}>
        <div className={styles.Icon}>
          <RxCross2 />

          <FaTwitter color="#50b7f5" />
        </div>

        <div className={styles.body}>
          <h1>Sign in to Twitter</h1>
          <GoogleButton />
          <AppleButton />
          <div className={styles.content3}>
            <span>or</span>
          </div>

          <TextField
            onChange={userHandle}
            style={{ width: "19rem", marginBottom: "30px" }}
            id="outlined-basic"
            label="Phone , Email or Username"
            variant="outlined"
            value={email}
          />

          <Button
            onClick={onclick}
            className={styles.btn}
            style={{
              textTransform: "none",
              background: "black",
              width: "19rem",
              marginBottom: "30px",
              borderRadius: "15px",
            }}
            variant="contained"
          >
            Next
          </Button>

          <Button
            onClick={forgothandle}
            className={styles.btn}
            variant="outlined"
            sx={{
              width: "19rem",
              borderRadius: "15px",
              textTransform: "none",
              color: "black",
            }}
          >
            <b>Forgot Password?</b>
          </Button>

          <div style={{ marginTop: "2rem", opacity: 0.8 }}>
            <b>Don't have an account? </b>
            <Link to="/register">Sign up</Link>
          </div>
          <div className={styles.Alert}>
            {usererr ? handlenavigate() : " "}
            {alert ? (
              <Alert severity="info">
                <strong>Sorry, we could not find your account.</strong>
              </Alert>
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
