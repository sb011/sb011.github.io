import styles from '../styles/Projects.module.css'
import images from './projectInfo'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const Projects = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef<any>(null)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth )
    }, [])

    return (
        <div id='projects' className={styles.container}>
            <h1 data-aos="fade-up-right" className={styles.title}>Projects</h1>
            <div data-aos="fade-up-left" className={styles.projects}>
                <motion.div ref={carousel} className={styles.carousel}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={styles.inner_carousel}>
                        {
                            images.map((img, index) => {
                                return (
                                    <motion.div key={index} className={styles.item}>
                                        <img loading='lazy' className={styles.projimg} src={img.img[0]} alt='project photos' />
                                        <div className={styles.info}>
                                            <h1 className={styles.projtitle}>{img.name}</h1>
                                            <div className={styles.techlist}>
                                                {
                                                    img.tech.map((t, index2) => {
                                                        return(
                                                            <div key={index2} className={styles.backtech}>
                                                                <span>{t}</span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <h1 className={styles.getmore}><a className={styles.getmorelink} href={`/${img.id}`}>Get more information</a></h1>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>
                </motion.div>      
            </div>
        </div>
    )
}


export default Projects