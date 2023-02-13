import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image';
import menu from '../public/menu.svg'
import { motion, AnimatePresence } from 'framer-motion';

import { useState, useEffect } from 'react';

const Path = (props: any) => (
    <motion.line
      fill="transparent"
      strokeWidth="3"
      stroke="black"
      strokeLinecap="round"
      {...props}
    />
);

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const list = {
        init: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.5,
                staggerChildren: 0.1,
                staggerDirection: -1,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.5,
                staggerChildren: 0.1,
                staggerDirection: -1,
                when: "afterChildren"
            }
        }
    }

    const liItem = {
        init: {
            y: -50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.5
            }
        },
        exit: {
            y: 50,
            opacity: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.5
            }
        }
    }

    return (
        <div className={styles.nav}>
            <motion.div initial={false} animate={open ? "open" : "closed"} className={styles.menuCont} onClick={() => setOpen(!open)}>
                <svg className={styles.menu} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path 
                        variants={{
                            open: { x1: 21, y1: 3, x2: 3, y2: 21 },
                            closed: { x1: 3, y1: 3, x2: 21, y2: 3 }
                        }} 
                    />
                    <Path 
                        x1="3" y1="12" x2="21" y2="12"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.1 }}
                    />
                    <Path 
                        variants={{
                            open: { x1: 21, y1: 21, x2: 3, y2: 3 },
                            closed: { x1: 3, y1: 21, x2: 21, y2: 21 }
                        }}
                    />
                </svg>
            </motion.div>
            <AnimatePresence>
            {
                open &&
                <motion.div variants={list} initial="init" animate="animate" exit="exit" className={styles.list}>
                    <motion.ul className={styles.ul}>
                        <motion.li variants={liItem} className={styles.li} onClick={() => setOpen(!open)}>
                            <Link className={styles.link} href="#top">Home</Link>
                        </motion.li>
                        <motion.li variants={liItem} className={styles.li} onClick={() => setOpen(!open)}>
                            <Link className={styles.link} href="#aboutme">About me</Link>
                        </motion.li>
                        <motion.li variants={liItem} className={styles.li} onClick={() => setOpen(!open)}>
                            <Link className={styles.link} href="#education">Education</Link>
                        </motion.li>
                        <motion.li variants={liItem} className={styles.li} onClick={() => setOpen(!open)}>
                            <Link className={styles.link} href="#experience">Experience</Link>
                        </motion.li>
                        <motion.li variants={liItem} className={styles.li} onClick={() => setOpen(!open)}>
                            <Link className={styles.link} href="#skills&certificates">Skills & Certificates</Link>
                        </motion.li>
                        <motion.li variants={liItem} className={styles.li} onClick={() => setOpen(!open)}>
                            <Link className={styles.link} href="#projects">Projects</Link>
                        </motion.li>
                        <motion.li variants={liItem} className={styles.li} onClick={() => setOpen(!open)}>
                            <Link className={styles.link} href="#contact">Contact Me</Link>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            }
            </AnimatePresence>
        </div>
    )
}

export default Navbar