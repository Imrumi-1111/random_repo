import { Link } from "react-router-dom";
export default function Text() {
  return (
    <div>
      <p>
        By signing up, you agree to the{" "}
        <Link to="https://twitter.com/en/tos">Terms of Service</Link>
      </p>
      <p>
        {" "}
        and <Link to="https://twitter.com/en/privacy">Privacy Policy</Link>,
        including{" "}
        <Link to="https://help.twitter.com/en/rules-and-policies/twitter-cookies">
          {" "}
          Cookie Use
        </Link>
        .
      </p>
      <br />
      <br />
      <p>
        Have an account already? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
