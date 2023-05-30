import Button from "@mui/material/Button";
import { FaApple } from "react-icons/fa";
import styles from './button.module.css'

export default function AppleButton(){
    return(
        <div className={styles.button}>
            <Button variant="outlined" color="primary" href="#outlined-buttons"
            sx={{
                textTransform : "none",
                width :"19rem",
                color: "black",
                marginBottom:"30px",
            }}
            > {<FaApple/>} Sign up with Apple </Button>

        </div>
    )

}