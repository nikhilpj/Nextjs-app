"use client";
import styles from "@/app/page.module.css";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import DateTime from "./DateTime";
import Button from "./Button";
import { useState } from "react";

const QuickBook = () => {
  const [sameAsPickup, setSameAsPickup] = useState(true);
  
  const handleSameAsPickupClick = () => {
    
    setSameAsPickup(true);
    console.log("state value of sameaspickup",sameAsPickup)
  };

  const handleDifferentDropOffClick = () => {
    setSameAsPickup(false);
    console.log('state vale of diff',sameAsPickup)
  };
  return (
    <div className={styles.quickBookContainer}>
      <div className={styles.quickBookContainerValues}>
        <div className={styles.sameAsPickup}>
          <Button
            height={38}
            width={108}
            name="same as pickup"
            backgroundColor="white"
            color="black"
            border="none"
            borderRadius={4}
            onClick={handleSameAsPickupClick}
          />
          {/* <div className={styles.sameAsPickupValues}>
        <DateTime/>
        </div> */}
        </div>
        <div className={styles.differentDropOff}>
          <Button
            height={38}
            width={120}
            name="Different Drop-Off"
            backgroundColor="white"
            color="black"
            border="none"
            borderRadius={4}
            onClick={handleDifferentDropOffClick}
          />
        </div>
        <div className={styles.vehicleType}>
          <Button
            height={38}
            width={108}
            name="Vehile type"
            backgroundColor="white"
            color="black"
            border="none"
            borderRadius={4}
          />
        </div>
      </div>

    {sameAsPickup ?<div className={styles.pickupLocationValues}>
        <div className={styles.sameAsPickupValues}>
          <Button
            width={328}
            height={42}
            borderRadius={4}
            color="black"
            backgroundColor="#F6F7F9"
           border='none'
            name="Pickup Location"
          />
          <DateTime label='Pick-up Date & time' backgroundColor='#F6F7F9' width={328} height={42} color='black' 
            border='none' borderRadius='15px'/>
           <DateTime label='Drop-Off Date & time' backgroundColor='#F6F7F9' width={328} height={42} color='black' 
            border='none' borderRadius='15px'/>
            <div className={styles.subscribeButton}>
             <Button
            width={200}
            height={37}
            borderRadius={4}
            color="white"
            backgroundColor="#E21E26"
           border='none'
            name="Subscribe"
          />
          </div>
        </div>
        
      </div>


           :<div className={styles.differentDropOffContainer}>
            <Button
            width={328}
            height={42}
            borderRadius={4}
            color="black"
            backgroundColor="#F6F7F9"
            border='none'
            name="Pickup Location"
            marginBottom={15}
          />
             <Button
            width={328}
            height={42}
            borderRadius={4}
            color="black"
            backgroundColor="#F6F7F9"
           border='none'
            name="Drop-Off Location"
          />
          <DateTime label='Pick-up Date & time' backgroundColor='#F6F7F9' width={328} height={42} color='black' 
            border='none' borderRadius='15px'/>
           <DateTime label='Drop-Off Date & time' backgroundColor='#F6F7F9' width={328} height={42} color='black' 
            border='none' borderRadius='15px'/>
            <div className={styles.subscribeButton}>
             <Button
            width={200}
            height={37}
            borderRadius={4}
            color="white"
            backgroundColor="#E21E26"
           border='none'
            name="Subscribe"
          />
          </div>
            </div>}
            
    </div>
  );
};

export default QuickBook;
