import styles from '../styles/Description.module.css'
import { motion } from 'framer-motion'
import { useRef } from 'react';

const Description = () => {
    const ref = useRef<any>();
    const container = {
        init: {
            opacity: 0,
            scale: 1.1,
        },
        inView: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        },
        exit: {
            scale: 1.1,
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    }

    const title = {
        init: {
            x: -100,
            opacity: 0
        },
        inView: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.1,
                type: "spring",
                stiffness: 100
            }
        },
        exit: {
            x: -100,
            opacity: 0,
            transition: {
                duration: 0.8,
                delay: 0.1,
                type: "spring",
                stiffness: 100
            }
        }
    }

    return (
        <div id='aboutme' className={styles.descontainer}>
            <div className={styles.cont}>
                <motion.h1  
                    variants={title}
                    initial="init"
                    whileInView="inView"
                    exit="exit"
                    className={styles.title}>
                    About me
                </motion.h1>
                <motion.p
                    variants={container} initial="init" whileInView="inView"
                    className={styles.des}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a software engineer with a passion for creating innovative solutions to complex problems. With my expertise in coding and programming, I strive to develop software that not only meets the needs of users, but also enhances their daily lives. I am excited to be part of this ever-evolving technological world, where possibilities are endless and innovation is key.
                </motion.p>
            </div>
        </div>
    )
}

export default Description