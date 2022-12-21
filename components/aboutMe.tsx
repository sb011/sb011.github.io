import Typewriter from 'typewriter-effect'
import styles from '../styles/Home.module.css'
import ImgSrc from '../public/profile_pic.jpg'
import Image from 'next/image'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const AboutMe = () => {
    useEffect(() => {
        const timer = setTimeout(() => {

        }, 4000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div id='top' className={styles.mainContainer}>
            <motion.div
                className={styles.imgContainer}
                animate={{
                    scale: 1,
                    transition: {
                        duration: 1,
                    }
                }}
            >
                <Image className={styles.img} src={ImgSrc} alt="Profile Pic"/>
            </motion.div>
            <div className={styles.me}>
                <div className={styles.line1}>
                    <Typewriter options={{
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        strings: [
                        "Hello,",
                        "नमस्ते,",
                        "નમસ્તે,",
                        "Hola,",
                        "Bonjour,",
                        "Ciao,",
                        "こんにちは,",
                        "안녕,",
                        "Salve,",
                        "Привет,",
                        "你好",
                        "ہیلو",
                        ]
                    }} />
                </div>
                <div className={styles.line2}>
                    I am
                </div>
                <div className={styles.line3}>
                    S<span className={styles.second_font}>MI</span>T B<span className={styles.second_font}>HORAN</span>I<span className={styles.second_font}>Y</span>A 
                </div>
            </div>
        </div>
    )
}

export default AboutMe