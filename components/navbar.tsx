import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import menu from '../public/menu.svg'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        function handleResize() {
            // Set window width/height to state
            if(window.innerWidth > 1024)
                setOpen(true)
          }
          // Add event listener
          window.addEventListener("resize", handleResize);
          // Call handler right away so state gets updated with initial window size
          handleResize();
          // Remove event listener on cleanup
          return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <div className={styles.nav}>
            <div className={styles.menuCont} onClick={() => setOpen(!open)}>
                <Image className={styles.menu} src={menu} alt='navbar'/>
            </div>
            {
                open &&
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link className={styles.link} href="#top">Home</Link>
                </li><li className={styles.li}>
                    <Link className={styles.link} href="#aboutme">About me</Link>
                </li><li className={styles.li}>
                    <Link className={styles.link} href="#education">Education</Link>
                </li><li className={styles.li}>
                    <Link className={styles.link} href="#experience">Experience</Link>
                </li><li className={styles.li}>
                    <Link className={styles.link} href="#skills&certificates">Skills & Certificates</Link>
                </li><li className={styles.li}>
                    <Link className={styles.link} href="#projects">Projects</Link>
                </li><li className={styles.li}>
                    <Link className={styles.link} href="#contact">Contact Me</Link>
                </li>
            </ul>
}
        </div>
    )
}

export default Navbar