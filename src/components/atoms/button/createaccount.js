import Button from "@mui/material/Button";
//import { black } from '@material-ui/core/colors';
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
          backgroundColor: "black",
        }}
        onClick={() => navigate("/details")}
      >
        {" "}
        Create account{" "}
      </Button>
    </div>
  );
}
