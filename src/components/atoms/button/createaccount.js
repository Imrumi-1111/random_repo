import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function CreateAccountBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        href="#outlined-buttons"
        sx={{
          textTransform: "none",
          width: "19rem",
          backgroundColor: "white",
          marginTop: "30px",
          marginBottom:"5px",
          borderRadius:"15px"
        }}
        onClick={() => navigate("/details")}
      >
        {" "}
        Create account{" "}
      </Button>
    </div>
  );
}
