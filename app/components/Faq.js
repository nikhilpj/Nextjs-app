'use client'
import styles from '@/app/page.module.css'
import Button from './Button'
import Image from 'next/image'
import { faqData } from '@/lib/data'
import { useState } from 'react'

const Faq = ()=>{
    const [activeIndex,setActiveIndex] = useState(null)

    const toggleAccordian = (index)=>{
        setActiveIndex(activeIndex=== index?null:index)
    }
    return (
        <div className={styles.faqContainer}>
            <div className={styles.faqContainerTitle}>
                <span>Frequently Asked Question</span>
            </div>
            
      <div className={styles.accordion}>
        
        {faqData.map((data,index)=>{

        return (

        <div key={index}>
            <hr className={styles.hr}/>
        <div className={styles.buttonFlex} onClick={()=>toggleAccordian(index)}>
        {/* <button class={styles.accordionButton}>What is my eligibility to book a car?</button> */}
            <Button height={38} width={238} name={data.question} backgroundColor='white' color='black' border='none' fontWeight='400' fontSize='13px'/>
            <Image src={activeIndex === index ? 'xmark.svg':'plus.svg'} width={14} height={14} className={styles.faqImage} />
            </div>
            {activeIndex === index && (
        <div className={styles.accordionContent}>
          {data.answer}
        </div>
        )}
        <hr className={styles.hr}/>
        </div>
        )})}

      </div>
      <hr/>
        </div>
    )
}

export default Faq