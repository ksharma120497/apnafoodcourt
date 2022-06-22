import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

export const MenuItem = ()=>{

    return(
        <div>
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Maharashtrian" />
            <FormControlLabel control={<Checkbox />} label="Punjabi" />
            <FormControlLabel control={<Checkbox />} label="Gujrati" />
        </FormGroup>
        </div>
    )
}