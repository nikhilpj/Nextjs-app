import styles from "@/app/page.module.css";
import Button from "./Button";
import InputComponent from "./InputComponent";
import DateTime from "./DateTime";
import Image from "next/image";

const DesktopBooking = () => {
  return (
    <div className={styles.desktopBookingContainer}>
      <div className={styles.desktopBooking}>
        <div className={styles.desktopBookingButtonFlex}>
        <div className={styles.desktopBookingButton}>
          <Button
            height={38}
            width={128}
            name="Same as Pick-up"
            backgroundColor="#E21E26"
            color="white"
            border="none"
          />
        </div>
        <div className={styles.desktopBookingButton}>
          <Button
            height={38}
            width={128}
            name="Different Drop-Off"
            backgroundColor="#E21E26"
            color="white"
            border="none"
          />
        </div>
        <div className={styles.desktopBookingButton}>
          <Button
            height={38}
            width={128}
            name="Select Vehicle type"
            backgroundColor="#E21E26"
            color="white"
            border="none"
            
          />
        </div>
        </div>
        <div className={styles.desktopBookingValues}>
            <div className={styles.desktopBookingValuesButton}>
            <Button width={150} height={46} backgroundColor='white' color='black' border='none' borderRadius={25} name='Al Quoz'/>
            </div>
            <div className={styles.desktopBookingValuesDateTime}>
            <DateTime label='Pick-up Date & time' backgroundColor='white' width={180} height={46} color='black' 
            border='none' borderRadius='25px'/>
            </div>
            <div className={styles.desktopBookingValuesDateTime}>
            <DateTime label='Drop-Off Date & time' backgroundColor='white' width={180} height={46} color='black' 
            border='none' borderRadius='25px'/>
            </div>
            <div className={styles.desktopBookingValuesImage}>
                <Image src='search.svg' width={64} height={42}/>
            </div>
            <div className={styles.desktopBookingLine}>
                <Image  src='Line.svg' width={42} height={45}/>
            </div>
            <div className={styles.quickBookButton}>
                <Button width={150} height={42} color='white' backgroundColor='red' name='quick book' borderRadius={20} border='1px solid white'/>
            </div>
        </div>
        <div className={styles.desktopBookingValues2}>
            <div className={styles.desktopBookingValues2Span}>
            <span>Download our App for easy accessibility anytime, anywhere!</span>
            </div>
            <div className={styles.desktopBookingValues2Image}>
                <Image src='appstore.svg' width={110} height={32} />
                <Image src='playstore.svg' width={110} height={32} />

            </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopBooking;
