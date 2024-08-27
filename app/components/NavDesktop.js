import styles from "@/app/page.module.css";
import Image from "next/image";

const NavDesktop = () => {
  return (
    <div className={styles.navDesktop}>
      <div className={styles.navDesktopSocialMedia}>
        <Image src="facebookDesktop.svg" width={14} height={14} alt="icon" />
        <Image src="ins.svg" width={14} height={14} alt="icon" />
        <Image src="twitterDesktop.svg" width={14} height={14} alt="icon" />
        <Image src="linkedinDesktop.svg" width={14} height={14} alt="icon" />
      </div>
      <div className={styles.navDesktopLogo}>
        <div className={styles.navDesktopLogoImage}>
          <Image src="Group 1261156529.svg" width={345} height={52} />
        </div>
        <div className={styles.navDesktopIcons}>
          <a href="">About</a>
          <a href="">Offers</a>
          <a href="">Corporate</a>
          <a href="">Personal</a>
          <a href="">Locations</a>
          <a href="">Contact us</a>
          <Image src="notification.svg" width={24} height={24} />
          <Image
            src="user.svg"
            width={100}
            height={29}
            className={styles.user}
          />
         
        </div>
        
      </div>
      <div className={styles.navDesktopPara}>
      <p>
            Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand
            Sales Counters | All Rates inclusive of VAT. T&C’s apply | Follow us
            on Social Media for New Offers
          </p>
          </div>
    </div>
  );
};

export default NavDesktop;
