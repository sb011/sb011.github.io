import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link className={styles.link} href="#top">Home</Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.link} href="#aboutme">About me</Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.link} href="#education">Education</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar