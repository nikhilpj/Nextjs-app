import styles from "@/app/page.module.css";
import Image from "next/image";
function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer1}>
        <div className={styles.logoAndSocialmedia}>
          <div className={styles.footerlogo}>
            <Image
              src="footerLogo.svg"
              height={46}
              width={113}
              alt="footer logo"
            />
          </div>
          <div className={styles.socailMedia}>
            <Image src="facebook.svg" width={16.98} height={16.98} alt="" />
            <Image src="linkedin.svg" width={16.98} height={16.98} alt="" />
            <Image src="twitter.svg" width={16.98} height={16.98} alt="" />
            <Image src="youtube.svg" width={16.98} height={16.98} alt="" />
          </div>
        </div>
        <div className={styles.footer1Nav}>
          <span>Home</span>
          <span>Offers</span>
          <span>Career</span>
          <span>About Us</span>
          <span>Locations</span>
        </div>
        <div className={styles.footer1Nav}>
          <span>FAQ</span>
          <span>Terms & Conditions</span>
          <span>Service Request</span>
        </div>
        <div className={styles.footer1Nav}>
          <span>Privacy Policy</span>
          <span>Services</span>
          <span>Contact Us</span>
        </div>
      </div>
      <div className={styles.footer2}>
        <div className={styles.footer2Title}>
          <span>Al Habtoor Companies</span>
        </div>
        <div className={styles.footer2Nav}>
          <span>Hospitality</span>
          <span>Real Estate</span>
          <span>Publishing</span>
        </div>
        <div className={styles.footer2Nav}>
          <span>Automotive</span>
          <span>Vehicle Leasing</span>
          
        </div>
        <div className={styles.footer1NavIcon}>
          <Image src='Group 1261156497.svg' width={58} height={28} alt="icon"/>
        </div>
        
        <div className={styles.footer2Copyright}>
        <hr/>
        <span>© 2023 Car rental LLC - All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
