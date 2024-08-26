import styles from '@/app/page.module.css'
import Image from 'next/image'
const Download = ()=>{
    return ( <div className={styles.downloadContainer}>
    <div className={styles.download}>
        <div className={styles.downloadFlex}>
        <span>Download our App for 
        easy Accessibility Anytime, Anywhere!</span>
        <div className={styles.downloadFlexAppIcons}>
        <Image src='./appstore.svg' width={120} height={35} alt='appstore icon' className={styles.downloadFlexAppIconAppstore}/>
        <Image src='./playstore.svg' width={120} height={35} alt='playstore icon'/>
        </div>
        </div>
        
    </div>
    <div className={styles.downloadIcons}>
        <Image src='./Group 1171275041.svg' width={41} height={39} alt='icon'/>
        <Image src='./Layer_1.svg' width={41} height={39} alt='icon'/>
        </div>
    </div>)
}
export default Download