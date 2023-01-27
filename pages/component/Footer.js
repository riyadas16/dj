import Link from "next/link"
import styles from '../../styles/Footer.module.css'
import event from "./event"

function Footer() {
  return (
    <footer className={styles.footer}><p>Copyright & copy: DJ Events 2023</p><p><Link href='/component/event'>About us</Link></p></footer>
  )
}

export default Footer