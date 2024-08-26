import styles from '@/app/page.module.css'
const InputComponent = ({placeholder,width})=>{
    return(<input type="text"  className={styles.inputField} placeholder={placeholder} width={width}/>)
}

export default InputComponent