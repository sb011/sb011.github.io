import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import projects from '../components/projectInfo'
import { motion } from 'framer-motion'
import styles from '../styles/ProjectInfo.module.css'
import Image from 'next/image';
import GitHub from '../public/GitHub.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Router from 'next/router'

type steps = {
    no: Number,
    description: String,
    code: String, 
}

type proj = {
    id: String,
    name: String,
    link: String,
    start_date: String,
    end_date: String,
    description: Array<String>,
    functionalities: Array<String>,
    steps_to_start: Array<steps>,
    tech: Array<string>,
    img: Array<string>,
    video: String
}

const Project = (props: any) => { 
    const id = props.id
    const [info, setInfo] = useState<proj>()

    const [functionalitiesLength, setFunctionalitiesLength] = useState<any>(0);
    const [stepsLength, setStepsLength] = useState<any>(0);

    const [width, setWidth] = useState(0)
    const carousel = useRef<any>(null)

    useEffect(() => {
        AOS.init({
          mirror: true,
          anchorPlacement: 'top-bottom',
          duration: 1000,
        });
      }, [])

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth )
    })

    useEffect(() => {
        const res = projects.find(p => id === p.id);
        setInfo(res);
        setFunctionalitiesLength(res?.functionalities?.length)
        setStepsLength(res?.steps_to_start?.length)
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div>
                    <div className={styles.header}>
                        <div data-aos="fade-right" onClick={() => Router.back()} className={styles.back}>&lt;-</div>
                        <h1 data-aos="fade-left" className={styles.title}>{info?.name}</h1>
                    </div>
                    <motion.div data-aos="fade-left" ref={carousel} className={styles.carousel}>
                        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={styles.inner_carousel}>
                            {
                                info?.img.map(image => {
                                    return (
                                        <motion.div className={styles.item}>
                                            <img className={styles.projimg} src={image} alt='project photos' />
                                        </motion.div>
                                    )
                                })
                            }
                        </motion.div>
                    </motion.div>
                    <div data-aos="flip-down" className={styles.block}>
                        <div className={styles.Slink}>
                            <div className={styles.git}>
                                <Image className={styles.logo} src={GitHub} alt='GitHub logo' />
                            </div>
                            <h2 className={styles.linktitle}><Link className={styles.link} href={`${info?.link}`} target='_blank'>Source Code</Link></h2>
                        </div>
                        <h2 className={styles.dates}>{info?.start_date} - {info?.end_date}</h2>
                    </div>
                </div>
                <div data-aos="zoom-in" className={styles.skillslist}>
                    <div className={styles.s_list}>
                    {
                        info?.tech.map(skills => {
                            return (
                                <span className={styles.skills}>{skills}</span>
                            )
                        })
                    }
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.frame2}>
                    <h2 data-aos="zoom-in-right" className={styles.sub_title}>Description</h2>
                    <div className={styles.block4}>
                        <div data-aos="zoom-in-right" className={styles.des_block}>
                        {
                            info?.description.map(d => {
                                return (
                                    <p className={styles.val}>{d}</p>
                                )
                            })
                        }
                        </div>
                        <div data-aos="zoom-in-left" className={styles.block5}>
                            <iframe 
                                className={styles.video}
                                src={info?.video}
                                frameBorder='0' 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title='video'
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
                {
                    functionalitiesLength > 0 && 
                    <div className={styles.frame}>
                        <h2 data-aos="zoom-in-right" className={styles.sub_title}>Functionalities</h2>
                        <div data-aos="zoom-in-left" className={styles.block2}>
                        {
                            functionalitiesLength > 0 && info?.functionalities?.map(func => {
                                return (
                                    <span className={styles.val}>{func}</span>
                                    )
                                })
                        }
                        </div>
                    </div>
                }
                {
                    stepsLength > 0 && 
                    <div className={styles.frame}>
                        <h2 data-aos="zoom-out-up" className={styles.sub_title}>Steps</h2>
                        <div data-aos="zoom-out-up" className={styles.block3}>
                        {
                            stepsLength > 0 &&
                            info?.steps_to_start?.map(sts => {
                                return (
                                    <div className={styles.code_span}>
                                        <h1 className={styles.step_des}><span className={styles.step_no}>{sts.no}.</span>{sts.description}</h1>
                                        <p className={styles.code_block}><code className={styles.code}>{sts.code}</code></p>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export async function getServerSideProps ({params: {id}}) {
    return { props: { id } };
}

export default Project