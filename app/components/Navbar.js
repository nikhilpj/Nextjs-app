import styles from "@/app/page.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarFlex}>
        <Image
          src="Group 1261156529.svg"
          width={155}
          height={23}
          alt="next image"
          className={styles.navbarLogoImg}
        />
        <Image
          src="menu.svg"
          width={24}
          height={24}
          alt="menu icon"
          className={styles.navbarMenu}
        />
      </div>
      <span className={styles.navbarSpan}>Sunday Pick Up/Drop</span>
    </div>
  );
}

export default Navbar;
