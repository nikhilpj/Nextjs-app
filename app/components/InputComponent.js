import styles from '@/app/page.module.css'
const InputComponent = ({placeholder,width,height})=>{
    return(<input type="text"  className={styles.inputField} placeholder={placeholder} width={width} height={height}/>)
}

export default InputComponent