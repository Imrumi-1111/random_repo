import "./sidebarOPtion.css";

export default function SidebarLogout({active,text,Icon}){
    return(
        <div className={`sidebarOption ${active && `sidebarOption--active`}`}>
            
        <h2>{text}</h2>
        <Icon/>

        </div>
    )
}