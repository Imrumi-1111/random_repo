import { useState,Fragment } from "react"
import styles from './logout.module.css'
//import { Modal } from "@mui/material"
//import Modal from 'react-modal'

export default function LogoutText(){
    const [logout, setLogout] = useState("")

    function handleLogout(){
        
    }
    
    return(
        <Fragment>
        <div className={styles.LogoutText}>Add Existing Account</div>
        <div className={styles.LogoutText}>Logout ayushw@gmail.com</div>
        </Fragment>
    )
}