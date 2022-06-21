import { Button, Input } from '@mui/material';
import React from 'react';

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    alignContent: "center"
}

export const Login = ()=>{

    const handleOnSubmit = ()=>{
        
    }


    return(
    <form 
    onSubmit={handleOnSubmit}>
        <div style={containerStyle}>
            <h1><u>Apna Food Court Login</u></h1>
           <Input placeholder='Username' />
           <Input placeholder='Password'/> 
           <Button type='submit'>Login</Button>
        </div>
    </form>

    );
}