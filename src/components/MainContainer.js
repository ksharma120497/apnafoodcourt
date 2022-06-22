import React from "react";
import {Login} from "./user-auth/Login"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Menu } from "./menu/Menu";

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    alignContent: "center",
    border: "3px solid black",
    borderRadius:"30px",
    padding: "10px",
    margin: "20% 20% 20% 20%",
}

const MainContainer = ()=>{
    const [view, setView] = React.useState("user-auth");
    console.log(view)
if(view.username==="admin" && view.password==="admin")
    return(
        <Menu/>
    );
    
 return(
    <div style={containerStyle}>
        <Login setView={setView}/>
        <Link to={"/signup"}><Button>Create a new Account</Button></Link>
    </div>
)

}

export default MainContainer;