"use client";
import styles from "@/app/page.module.css";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Button from "./Button";

const QuickBook = () => {
  return (
    <div className={styles.quickBookContainer}>
      <div className={styles.sameAsPickup}>
        <Button
          height={38}
          width={108}
          name="same as pickup"
          backgroundColor="white"
          color="black"
          border="none"
        />
        <div className={styles.sameAsPickupValues}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimePicker label="Basic date time picker" />
        </DemoContainer>
      </LocalizationProvider>
        </div>
      </div>
      <div className={styles.differentDropOff}>
        <Button
          height={38}
          width={120}
          name="Different Drop-Off"
          backgroundColor="white"
          color="black"
          border="none"
        />
      </div>
      <div className={styles.vehicleType}>
        <Button height={38}
          width={108}
          name="Vehile type"
          backgroundColor="white"
          color="black"
          border="none"/>
      </div>
      
    </div>
  );
};

export default QuickBook;
