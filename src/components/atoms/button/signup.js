import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function SignUpButton({handleSignup}) {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        variant="outlined"
        // onClick={() => navigate("/home")}
        onClick={handleSignup}
        sx={{
          backgroundColor:"white",
          width: "30rem",
        }}
      >
        Sign Up
      </Button>
    </div>
  );
}
