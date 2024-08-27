import styles from "@/app/page.module.css";
import InputComponent from "./InputComponent";
import Button from "./Button";
const Subscription = () => {
  return (
    <div className={styles.subscriptionContainer}>
      <div className={styles.subscriptionTitle}>
        <span>Subscribe here for exclusive offers and updates!</span>
      </div>
      <div className={styles.input}>
        <InputComponent placeholder="Name" />
        <InputComponent placeholder="Email" />
      </div>
      <div className={styles.subscriptionParagraph}>
        <p>
          Don't miss out! enter your email and your name, then hit subscribe to
          unlock a world of special offers and details.
        </p>
      </div>
     <div className={styles.buttonMobile}>
     <Button
        height={38}
        width={128}
        name="Subscribe"
        backgroundColor="#E21E26"
        color="white"
        border="none"
        borderRadius={4}
      />
     </div>
     
       <div className={styles.buttonDesktop}>
       <Button
        height={57}
        width={464}
        name="Subscribe"
        backgroundColor="#E21E26"
        color="white"
        border="none"
        borderRadius={4}
      />
      </div>
    </div>
  );
};
export default Subscription;
