import styles from "@/app/page.module.css";
import Image from "next/image";

const NavDesktop = () => {
  return <div className={styles.navDesktop}>
    <div className={styles.navDesktopSocialMedia}>
    <Image src='facebookDesktop.svg' width={14} height={14} alt="icon"/>
    <Image src='ins.svg' width={14} height={14} alt="icon"/>
    <Image src='twitterDesktop.svg' width={14} height={14} alt="icon"/>
    <Image src='linkedinDesktop.svg' width={14} height={14} alt="icon"/>
    </div>
  </div>;
};

export default NavDesktop
