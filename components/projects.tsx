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
            color: "rgb(0,0,0)",
            scale: 1
        },
        animate: {
            background: "rgb(65, 105, 225)",
            color: "rgb(255,255,255)",
            scale: 1.1,
            transition: {
                ease: "easeInOut",
                duration: 0.5
            }
        },
        exit: {
            background: "rgb(255,255,255)",
            color: "rgb(0,0,0)",
            scale: 1,
            transition: {
                ease: "easeInOut"
            }
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
            <motion.h1 viewport={{ once: true }} variants={title} initial="init" whileInView="inView" exit="exit" className={styles.title}>Projects</motion.h1>
            <motion.div viewport={{ once: true }} variants={list} initial="init" whileInView="inView" exit="exit" className={styles.projectsList}>
                {
                    images.map((img, index) => {
                        return (
                            <Link href={`/${img.id}`} key={index} className={styles.link}>
                                <motion.div viewport={{ once: true }} variants={liItem} initial="init" whileInView="inView" exit="exit" className={styles.projectCont}>
                                <motion.div viewport={{ once: true }} variants={hover} initial="init" whileHover="animate" exit="exit" className={styles.project}>
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
        </div>
    )
}


export default Projects