import { FcGoogle } from 'react-icons/fc'
import Button from "@mui/material/Button";
import styles from './button.module.css'


export default function GoogleButton() {
    return (
        <div className={styles.button}>
            <Button variant="outlined" color="primary" href="#outlined-buttons"
            sx={{
                textTransform : "none",
                width :"19rem",
                color:"black",
                marginTop:"20px",
                marginBottom:"30px",
    
            }}
            > {<FcGoogle />} Sign up with Google</Button>
        </div>
    )
}