import { Button } from '@mui/material';
import React from 'react';
import { MenuItem } from './MenuItem';

const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    padding: "10px",
    margin: "0% 20% 0% 0%",
}

const menuStyle = {
    border: "3px solid black",
    borderRadius:"30px",
    padding: "30px",
    margin: "0% 2% 0% 0%",
}

export const Menu = () =>{

    return(
        <form>
            <h1 align="center"><u>Choose your cuisine </u></h1>
        <div style={containerStyle}>
            <div style={menuStyle}>
                <h2>Monday</h2>
                <MenuItem/>
            </div>
            <div style={menuStyle}>
                <h2>Tuesday</h2>
                <MenuItem/>
            </div>
            <div style={menuStyle}>
                <h2>Wednesday</h2>
                <MenuItem/>
            </div>
            <div style={menuStyle}>
                <h2>Thursday</h2>
                <MenuItem/>
            </div>
            <div style={menuStyle}>
                <h2>Friday</h2>
                <MenuItem/>
            </div>
        </div>
        <Button style={{marginLeft:"45%", marginTop:"10%"}} variant='outlined'>Submit</Button>
        </form>
    )

}