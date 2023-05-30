import { FaTwitter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import GoogleButton from "../../atoms/button/google";
import AppleButton from "../../atoms/button/apple";
import Text from "../../atoms/text/text";
import CreateAccountBtn from "../../atoms/button/createaccount";
import styles from "./register.module.css";

export default function SignUp() {
  return (
    <div className={styles.b}>
      <div className={styles.Icon}>
        <RxCross2 />
        <FaTwitter color="skyblue" />
      </div>

      <div className={styles.body}>
        <h1>Join Twitter today</h1>
        <GoogleButton />
        <br />
        <br />
        <AppleButton />
        <br />
        <br />
        <div className={styles.or}>
          <span>or</span>
        </div>
        <br />
        <br />
        <CreateAccountBtn />
        <br />
        <br />
        <Text />
      </div>
    </div>
  );
}
