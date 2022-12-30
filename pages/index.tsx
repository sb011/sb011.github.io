import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AboutMe from '../components/aboutMe'
import Navbar from '../components/navbar'
import Description from '../components/description'
import Education from '../components/education'
import Experience from '../components/experience'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/Contact'
import Footer from '../components/footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    AOS.init({
      mirror: true,
      anchorPlacement: 'top-bottom',
      duration: 1000,
    });
  }, [])
  return (
    <>
      <Head>
        <title>Smit&apos;s Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Freelancer, learner, and creative developer living in Gujarat." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
        <meta name="keywords" content="smit, smit's portfolio, portfolio, smit bhoraniya, bhoraniya smit" />
        <meta name="google-site-verification" content="db3Jm0LzFNjidddxajNLZTks7p5zACWOyczV7QyZvKg" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          <AboutMe />
          <Description />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
