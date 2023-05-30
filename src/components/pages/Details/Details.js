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

  const handleToggle = (e) => {
    e.preventDefault();
    setUseEmail(!useEmail);
  };

  return (
    <div className={styles.Details}>
      <div className={styles.Icon}>
        <RxCross2 />
      </div>
      <h1>Create your account</h1>

      {/* <Input /> */}

      <div>
        <OutlinedInput
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          sx={{
            width: "30rem",
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
              width: "30rem",
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
              width: "30rem",
            }}
          />
        </div>
      )}
      <a href="/" onClick={handleToggle} className="emailtoggle">
        {useEmail ? "Use phone instead" : "Use email instead"}
      </a>

      {/* <p className={styles.p}>
        <Link to="">Use email instead</Link>
      </p> */}

      <DetailsText />
      <GroupedSelect />
      <br />
      <br />
      <SignUpButton />
    </div>
  );
}
