import Typewriter from 'typewriter-effect'
import styles from '../styles/Home.module.css'
import ImgSrc from '../public/profile_pic.webp'
import ImgSrc2 from '../public/profile_pic_mob.webp'
import Image from 'next/image'

const AboutMe = () => {
    return (
        <div id='top' className={styles.mainContainer}>
            <div
                data-aos="zoom-out-up"
                data-aos-duration="2000"
                className={styles.imgContainer}>
                <Image priority sizes="(max-width: 480px) 480w, 1200px" className={styles.img} src={ImgSrc} alt="Profile Pic"/>
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
                    <h1 className={styles.iam}>S<span className={styles.second_font}>MI</span>T B<span className={styles.second_font}>HORAN</span>I<span className={styles.second_font}>Y</span>A</h1>
                </div>
            </div>
        </div>
    )
}

export default AboutMe