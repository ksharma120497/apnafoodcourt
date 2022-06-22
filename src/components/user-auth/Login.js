import { Button, Input, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    alignContent: "center"
}

export const Login = ({setView})=>{
const [userName,setUserName] = React.useState("");
const [password,setPassword] = React.useState("");

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        setView({username:e.target[0].value, password:e.target[2].value});
    }


    return(
    <form 
        onSubmit={handleOnSubmit}
        
    >
        <div style={containerStyle}>
            <h1><u>Apna Food Court Login</u></h1>
           <TextField 
                    name="username"
                     placeholder='Username' 
                      value={userName} 
                      onChange={(e)=>setUserName(e.target.value)}/>
           <TextField name="password"
                    placeholder='Password'
                    type="password" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
           /> 
           <Button type='submit' variant="outlined">Login</Button>
        </div>
    </form>

    );
}