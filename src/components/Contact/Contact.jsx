import { RiMailLine } from "react-icons/ri";
import styles from './Style.module.scss'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <p className={styles.email}><RiMailLine /> diegozalo57@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact