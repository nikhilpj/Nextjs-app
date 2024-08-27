'use client'
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { colors } from "@mui/material";

const DateTime=({label,backgroundColor,width,height,color,borderRadius,border})=>{
    return (<>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimePicker label={label}  slotProps={{
            textField:()=>({
                sx:{
                    backgroundColor:`${backgroundColor}`,
                    width:`${width}px`,
                    height:`${height}px`,
                    color:`${color}`,
                    borderRadius:`${borderRadius}`,
                    border:`${border}`,
                    overflow:'hidden'
                }
            })
          }}/>
        </DemoContainer>
      </LocalizationProvider>
    </>)
}

export default DateTime