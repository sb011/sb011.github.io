import styles from '../styles/Experience.module.css'
import Image from 'next/image'
import ImgSrc from '../public/Amazon_icon.svg'
import ImgSrc2 from '../public/jp-morgan-chase.svg'
import Link from 'next/link';
import { motion } from 'framer-motion';

const Experience = () => {
    const main = {
        init: {
            scale: 0.5,
            y: 100
        },
        inView: {
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
                ease: "easeInOut",
                when: "beforeChildren"
            }
        },
        exit: {
            scale: 0.5,
            opacity: 0
        }
    }

    const title = {
        init: {
            color: "rgb(0,0,0)"
        },
        inView: {
           color: "rgb(255, 255, 255)",
           transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        exit: {
            color: "rgb(0,0,0)"
        }
    }
    
    const cards = {
        init: {
            x: "200%"
        },
        inView: {
            x: 0,
            transition: {
                duration: 1,
                type: "spring",
                ease: "easeInOut"
            }
        }
    }
    return (
        <div id='experience' className={styles.excontainer}>
            <motion.div variants={main} initial="init" whileInView="inView" className={styles.background}>
                <motion.div className={styles.titleCont}>
                    <motion.h1 variants={title} className={styles.title}>Experience</motion.h1>
                </motion.div>
                <motion.div className={styles.cards}>
                    <motion.div variants={cards} className={styles.card}>
                        <div className={styles.info2}>
                            <div className={styles.mainInfo}>
                                <div className={styles.details}>
                                    <h1 className={styles.company}>Amazon </h1>
                                    <h2 className={styles.title_company}>Amazon ML Summer School&apos;22 - Apprenticeship</h2>
                                    <div className={styles.detailsCont}>
                                        <h2 className={styles.dates}>July 2022 - July 2022</h2>
                                        <Link className={styles.certificate} href="https://drive.google.com/file/d/1VjyrH3OTywtqrtzI6nQw_dlTfwBHJvpj/view" target="_blank">Certificate</Link>
                                    </div>
                                </div>
                                <div className={styles.imgContainer}>
                                    <Image loading="lazy" className={styles.img} src={ImgSrc} alt="amazon logo"/>
                                </div>
                            </div>
                            <div className={styles.about}>
                                <p className={styles.points}>Discovered various machine learning techniques, including supervised
            learning, unsupervised learning, and reinforcement learning.</p>
                                <p className={styles.points}>Examine several ML algorithms, such as decision trees, linear regression,
            and logistic regression.</p>
                                <p className={styles.points}>Learn the fundamentals of deep neural networks, probability graphic
            models, dimension reduction, and causal inference.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={cards} className={styles.card}>
                        <div className={styles.info2}>
                            <div className={styles.mainInfo}>
                                <div className={styles.details}>
                                    <h1 className={styles.company}>JP Morgan Chase&Co.</h1>
                                    <h2 className={styles.title_company}>Software Engineering Virtual Experience</h2>
                                    <div className={styles.detailsCont}>
                                        <h2 className={styles.dates}>July 2022 - July 2022</h2>
                                        <Link className={styles.certificate} href="https://drive.google.com/file/d/1aVG5rSuJZ6AqWcCH9JQFlQecG-_rjnKF/view?usp=share_link" target="_blank">Certificate</Link>
                                    </div>
                                </div>
                                <div className={styles.imgContainer}>
                                    <Image loading="lazy" className={styles.img} src={ImgSrc2} alt="jpmc logo"/>
                                </div>
                            </div>
                            <div className={styles.about}>
                                <p className={styles.points}>Recognize the principles of successful user experience design.</p>
                                <p className={styles.points}>Possessed financial know-how that was matched with technical expertise to
    effectively solve problems.</p>
                                <p className={styles.points}>Gained practical experience using the perspective tool for data visualisation.</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Experience