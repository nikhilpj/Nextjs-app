import styles from '@/app/page.module.css'
import Image from "next/image"
const MainImage = ()=>{
    return (
        <div className={styles.mainImage}>
        <Image src='/Group 1171275029.svg' layout='fill' objectFit='cover' alt='main image'/>
        </div>
    )
}

export default MainImage