import Typewriter from 'typewriter-effect'
import styles from '../styles/Home.module.css'
import ImgSrc from '../public/profile_pic.jpg'
import Image from 'next/image'
import { useEffect } from 'react'

const AboutMe = () => {
    const text = "Hey scroll down don't be shy";
    // const words = []
    // useEffect(() => {
    //     text.split("").map()
    // }, [])

    return (
        <div id='top' className={styles.mainContainer}>
            <div
                data-aos="zoom-out-up"
                data-aos-duration="2000"
                className={styles.imgContainer}
            >
                <Image className={styles.img} src={ImgSrc} alt="Profile Pic"/>
            </div>
            <div className={styles.me}>
                <div 
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className={styles.line1}>
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
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className={styles.line2}>
                    <h1 className={styles.iam}>I am</h1>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className={styles.line3}>
                    S<span className={styles.second_font}>MI</span>T B<span className={styles.second_font}>HORAN</span>I<span className={styles.second_font}>Y</span>A 
                </div>
            </div>
            {/* <div className={styles.circle}>
                <div className={styles.text}>
                    <p className={styles.p}></p>
                </div>
            </div> */}
        </div>
    )
}

export default AboutMe