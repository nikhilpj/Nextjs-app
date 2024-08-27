import styles from '@/app/page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const FooterDesktop = ()=>{
    return (<>
    <div className={styles.footerDesktop}>
        <div className={styles.footerDesktopSection1}>
            <Image src='footerDesktop.svg' width={56} height={66}/>
            <span>Member of the Al Habtoor Group</span>
        </div>
        <div className={styles.footerDesktopSection2}>
            <div className={styles.footerDesktopSection2Links}>
                <Link href='' >Home</Link>
                <Link href='' >Offers</Link>
                <Link href='' >FAQ</Link>
                <Link href='' >Career</Link>
            </div>
            <div className={styles.footerDesktopSection2Links}>
                <Link href='' >About us</Link>
                <Link href='' >Locations</Link>
                <Link href='' >Privacy Policy</Link>
                <Link href='' >Terms & Condfitions</Link>
            </div>
            <div className={styles.footerDesktopSection2Links}>
                <Link href='' >Services</Link>
                <Link href='' >Contact us</Link>
                <Link href='' >Contact us</Link>
                
            </div>
            <div className={styles.footerDesktopSection2Links}>
                <Link href='' >Al Habtoor Companies</Link>
                
            </div>
            <div className={styles.footerDesktopSection2Links}>
                <Link href='' >Hospitality</Link>
                <Link href='' >Real Estate</Link>
                <Link href='' >Education</Link>
                <Link href='' >Publishing</Link>
                <Link href='' >Automotive</Link>
                <Link href='' >Automotive</Link>
                <Link href=''>Vehicle Leasing</Link>
            </div>

        </div>
        <div className={styles.footerDesktopSection3}>
            <span>fOLLOW US ON</span>
            <div className={styles.footerDesktopSection3SocialMedia}>
                <Image src='facebookFooter.svg' width={17} height={17}/>
                <Image src='twitterFooter.svg' width={17} height={17}/>
                <Image src='instagramFooter.svg' width={17} height={17}/>
                <Image src='linkedinFooter.svg' width={17} height={17}/>
                <Image src='youtubeFooter.svg' width={17} height={17}/>

            </div>
            <div className={styles.safety}>
                <Image src='footerSafety.svg' width={64} height={24}/>
            </div>
        </div>
        
    </div>
    <div className={styles.footerDesktopCopyright}>
        <span>© 2018 Car rental LLC - All Rights Reserved.</span>
    </div>
    </>)
}

export default  FooterDesktop