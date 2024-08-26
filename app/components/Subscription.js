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
          Please select the ways you would like to hear from Diamondlease, and
          confirm that you’re happy for us to store your data in line with our
          Privacy Policy.
        </p>
      </div>
        <Button height={38} width={128} name='Subscribe' backgroundColor='#E21E26' color='white' border='none' />
    </div>
  );
};
export default Subscription;
