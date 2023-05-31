import styles from "./Details.module.css";
import { RxCross2 } from "react-icons/rx";
import DetailsText from "./detailsText";
import GroupedSelect from "../../atoms/inputField/select";
import SignUpButton from "../../atoms/button/signup";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";

export default function Details() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [useEmail, setUseEmail] = useState("");

  const Storage = localStorage.getItem("signupData")
    ? JSON.parse(localStorage.getItem("signupData"))
    : [];

  const handleToggle = (e) => {
    e.preventDefault();
    setUseEmail(!useEmail);
  };

  function handleSignup() {
    const temp = {
      name: name,
      email: email,
      phone: phone,
    };

    localStorage.setItem("signupData", JSON.stringify([...Storage, temp]));
  }

  return (
    <div className={styles.Details}>
      <div className={styles.Icon}>
        <RxCross2 />
      </div>
      <h1>Create your account</h1>
      <div>
        <OutlinedInput
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          sx={{
            width: "25rem",
            marginBottom: "20px",
          }}
        />
      </div>
      {useEmail ? (
        <div>
          <OutlinedInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: "25rem",
              height: "2.5rem",
            }}
          />
        </div>
      ) : (
        <div>
          <OutlinedInput
            placeholder="Phone"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{
              width: "25rem",
              height: "2.5rem",
            }}
          />
        </div>
      )}
      <a href="/" onClick={handleToggle} className={styles.emailtoggle}>
        {useEmail ? "Use phone instead" : "Use email instead"}
      </a>
      <div>
        <DetailsText />
      </div>
      <div>
        <GroupedSelect />
      </div>
      <div className={styles.btn}>
        <SignUpButton handleSignup={handleSignup} />
      </div>
    </div>
  );
}
