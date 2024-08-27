import styles from "@/app/page.module.css";
import Image from "next/image";
import InputComponent from "./InputComponent";
import Button from "./Button";

const Advertisement = () => {
  return (
    <div className={styles.advertisement}>
      <div className={styles.advertisementFlex}>
        <div className={styles.advertisementImage}>
          <Image src="/Rectangle.svg" height={245} width={136} alt="image" />
        </div>
        <div className={styles.advertisementImageDetails}>
          <span>Get it on</span>
          <Image
            src="/appstore.svg"
            width={103}
            height={30}
            alt="icon"
            className={styles.image1}
          />
          <Image src="/playstore.svg" width={103} height={30} alt="ion" />
          <div className={styles.advertisementImageParagraph}>
            <p>
              Enter your number and receive a direct link to download the app
            </p>
          </div>
        </div>
        <div className={styles.advertisementImageDetailsDesktop}>
          <div className={styles.advertisementImageDetailsDesktopPara}>
            <span>
              Enter your number and receive a direct link to download the app
            </span>
          </div>
          <div className={styles.advertisementInputMobile}>
            <InputComponent placeholder="Enter Phone Number" />
          </div>
          <Button
            height={42}
            width={144}
            name="Get the link"
            backgroundColor="black"
            color="white"
            border="none"

          />
          <div className={styles.advertisementDesktopSpan}>
            <span>Get in on</span>
          </div>
          <div className={styles.advertisementDesktopSocialMedia}>
            <Image src='appstore.svg' width={103} height={30}/>
            <Image src='playstore.svg' width={103} height={30}/>
          </div>
        </div>
      </div>
      <div className={styles.advertisementInput}>
        <InputComponent placeholder="Enter Phone Number" />
      </div>
      <div className={styles.advertisementButton}>
        <Button
          height={39}
          width={129}
          name="Get the link"
          backgroundColor="black"
          color="white"
          border="none"
          borderRadius={4}
        />
      </div>
    </div>
  );
};

export default Advertisement;
