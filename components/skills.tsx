import Image from 'next/image'
import styles from '../styles/Skills.module.css'
import Clang from '../public/C++.svg'
import Javascript from '../public/Javascript.svg'
import Python from '../public/Python.svg'
import HTML from '../public/HTML.svg'
import CSS from '../public/CSS.svg'
import MongoDB from '../public/MongoDB.svg'
import MySQL from '../public/MySQL.svg'
import ReactJS from '../public/ReactJS.svg'
import NodeJS from '../public/NodeJS.svg'
import ExpressJS from '../public/ExpressJS.svg'
import Flask from '../public/Flask.svg'
import GitHub from '../public/GitHub.svg'
import AWS from '../public/aws.svg'
import Link from 'next/link'

const Skills = () => {
    return (
        <div id='skills&certificates' className={styles.container}>
            <div className={styles.main}>
                <div className={styles.skill}>
                    <h1 data-aos="zoom-in-up" className={styles.title}>Skills</h1>
                    <div data-aos="zoom-in-down" className={styles.cont}>
                        <div className={styles.logos}>
                            <div className={styles.card}>
                                <Image className={styles.logo} src={Clang} alt='C++ logo' />
                                <h1 className={styles.header}>C++</h1>
                            </div>
                            <div className={styles.card}>
                                <Image className={styles.logo} src={Javascript} alt='Javascript logo' />
                                <h1 className={styles.header}>Javascript</h1>
                            </div>
                            <div className={styles.card}>
                                <Image className={styles.logo} src={Python} alt='Python logo' />
                                <h1 className={styles.header}>Python</h1>
                            </div>
                            <div className={styles.card}>
                                <Image className={styles.logo} src={HTML} alt='HTML logo' />
                                <h1 className={styles.header}>HTML</h1>
                            </div>
                            <div className={styles.card}>
                                <Image className={styles.logo} src={CSS} alt='CSS logo' />
                                <h1 className={styles.header}>CSS</h1>
                            </div>
                            <div className={styles.card}>
                                <Image className={styles.logo} src={MongoDB} alt='MongoDB logo' />
                                <h1 className={styles.header}>MongoDB</h1>
                            </div>
                            <div className={styles.card}>
                                <Image className={styles.logo} src={MySQL} alt='MySQL logo' />
                                <h1 className={styles.header}>MySQL</h1>
                            </div>
                            <div className={styles.card}>
                                <Image className={styles.logo} src={ReactJS} alt='ReactJS logo' />
                                <h1 className={styles.header}>ReactJS</h1>
                            </div>
                            <div className={styles.card}>
                                <Image className={styles.logo} src={NodeJS} alt='NodeJS logo' />
                                <h1 className={styles.header}>NodeJS</h1>
                            </div>
                            <div className={styles.card}>
                                <Image className={styles.logo} src={ExpressJS} alt='ExpressJS logo' />
                                <h1 className={styles.header}>ExpressJS</h1>
                            </div>
                            <div className={styles.card}>
                                <Image className={styles.logo} src={Flask} alt='Flask logo' />
                                <h1 className={styles.header}>Flask</h1>
                            </div>
                            <div className={styles.card}>
                                <Image className={styles.logo} src={GitHub} alt='GitHub logo' />
                                <h1 className={styles.header}>GitHub</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.certificates}>
                    <h1 data-aos="zoom-in-up" className={styles.title}>Certificates</h1>
                    <div data-aos="zoom-in-down" className={styles.content}>
                        <div className={styles.certificate}>
                            <div className={styles.certicard}>
                                <Image className={styles.logo} src={MongoDB} alt='MongoDB logo' />
                            </div>
                            <div>
                                <h2 className={styles.certificate_title}>MongoDB Certified Developer, Associate (C100DEV)</h2>
                                <h3 className={styles.certificate_issue}>Issued by MongoDB</h3>
                                <Link className={styles.credentials} href='https://drive.google.com/file/d/1r7DSURYdTFKMHGNA0YdfgWDvSi1COm7m/view?usp=share_link' >Show credentials</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills