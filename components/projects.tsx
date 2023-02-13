import styles from '../styles/Projects.module.css'
import images from './projectInfo'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

const Projects = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef<any>(null)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth )
    }, [])

    const hover = {
        init: {
            background: "rgb(255,255,255)",
            color: "rgb(0,0,0)"
        },
        animate: {
            background: "rgb(65, 105, 225)",
            color: "rgb(255,255,255)"
        },
        exit: {
            background: "rgb(255,255,255)",
            color: "rgb(0,0,0)"
        },
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

    const list = {
        init: {
            opacity: 0
        },
        inView: {
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.5,
                staggerChildren: 0.2,
                staggerDirection: -1,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.5,
                staggerChildren: 0.2,
                staggerDirection: -1,
                when: "afterChildren"
            }
        }
    }

    const liItem = {
        init: {
            x: -100,
            opacity: 0
        },
        inView: {
            x: 0,
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 1
            }
        },
        exit: {
            x: 100,
            opacity: 0,
            transition: {
                ease: "easeInOut",
                duration: 1
            }
        }
    }

    return (
        <div id='projects' className={styles.container}>
            <motion.h1 variants={title} initial="init" whileInView="inView" exit="exit" className={styles.title}>Projects</motion.h1>
            {/* <div className={styles.cont}> */}
                <motion.div variants={list} initial="init" whileInView="inView" exit="exit" className={styles.projectsList}>
                    {
                        images.map((img, index) => {
                            return (
                                <Link href={`/${img.id}`} key={index} className={styles.link}>
                                    <motion.div variants={liItem} initial="init" whileInView="inView" exit="exit" className={styles.projectCont}>
                                    <motion.div variants={hover} initial="init" whileHover="animate" exit="exit" className={styles.project}>
                                        <span className={styles.projtitle}>{img.name}</span>
                                        <div className={styles.skills}>
                                        {
                                            img.tech.map((skill, ind) => {
                                                return (
                                                    <span key={ind} className={styles.skill}>{skill}</span>
                                                )
                                            })
                                        }
                                        </div>
                                        <motion.div className={styles.arrow}>
                                            <svg width="103" height="75" viewBox="0 0 103 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.5 37.5H101.5" stroke="black" stroke-width="3" stroke-linecap="round"/>
                                                <path d="M66 2L101.355 37.3553" stroke="black" stroke-width="3" stroke-linecap="round"/>
                                                <path d="M66 73L83.6777 55.3223L101.355 37.6447" stroke="black" stroke-width="3" stroke-linecap="round"/>
                                            </svg>
                                        </motion.div>
                                    </motion.div>
                                    </motion.div>
                                </Link>
                            )
                        })
                    }
                </motion.div>
            {/* </div> */}
            {/* <div className={styles.projects}>
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
            </div> */}
        </div>
    )
}


export default Projects