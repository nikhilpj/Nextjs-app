import styles from '@/app/page.module.css'
import { rentData } from '@/lib/data'
import Image from 'next/image'

const Rent = ()=>{
    return (<div className={styles.rentContainer}>
        <div className={styles.rentContainerTitle}>
            <span>Rent/Lease in 3 Easy Steps</span>
        </div>

        {rentData.map((card,cardIndex)=>(

        
        <div className={styles.rentCard} key={cardIndex}>
            <div className={styles.orderIcon}>
                <Image src={`/${card.image}`} width={45.5} height={37} alt='icon'/>
            </div>
            <div className={styles.subCard}>
                <div className={styles.subCardImage}>
                <Image src={`/${card.icon}`} width={35.8} height={43.3} alt='icon'/>
                </div>
                <div className={styles.subCardContent}>
                <span>{card.content}</span>
                </div>
            </div>
        </div>

))}
        
    </div>)
}

export default Rent