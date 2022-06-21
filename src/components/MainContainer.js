import React from "react";
import {Login} from "./user-auth/Login"
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    alignContent: "center",
    border: "3px solid black",
    padding: "10px",
    margin: "20% 20% 20% 20%",
}

const MainContainer = ()=>{
return(
    <div style={containerStyle}>
        <Login/>
        <Link to={"/signup"}>Dont already have an account? Create here</Link>
    </div>
)

}

export default MainContainer;