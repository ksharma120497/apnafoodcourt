import { Button, Input, TextField } from '@mui/material';
import React from 'react';

const registrationStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    alignContent: "center",
    border: "3px solid black",
    borderRadius:"30px",
    padding: "10px",
    margin: "5% 20% 20% 20%",
}

export const SignUp = ()=>{

    return(
        <form
         valida
        >
            <div style={registrationStyle}>
            <h1><u>Fill in the details</u></h1>
            <TextField  placeholder='Full Name' style={{width:'400px'}}/>
            <TextField  placeholder='Email' style={{width:'400px'}}/>
            <TextField  placeholder='Mobile Number' style={{width:'400px'}}/>
            <TextField  placeholder='New Password' style={{width:'400px'}}/> 
            <TextField  placeholder='Type New Password Again' style={{width:'400px'}}/>  
            <TextField  placeholder='Office Name' style={{width:'400px'}}/>
            <TextField
                style={{width:'400px'}} 
                placeholder='Office Address' 
                multiline maxRows={4} 
                id="outlined-multiline-flexible"
            />
            <Button variant="outlined" type='submit'>Register</Button>
            </div>
        </form>
    )
}