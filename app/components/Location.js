import styles from '@/app/page.module.css'
import { locationData } from '@/lib/data'
import Image from 'next/image'

const Location = ()=>{
    return (<div className={styles.locationContainer}>
        <div className={styles.locationTitle}>
            <span>Locations</span>
        </div>
        <div className={styles.locationDetails}>
            {locationData.map((data,Index)=>(
                     <div className={styles.locations}>
                        <div className={styles.locationImage}>
                     <Image src={`/${data.image}`} width={22.8} height={19} alt='icon'/>
                     </div>
                     <div className={styles.locationSpan}>
                     <span>{data.location}</span>
                     </div>
                     </div>
            ))}
       
        </div>
            
    </div>)
}

export default Location