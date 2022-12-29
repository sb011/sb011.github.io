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
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        <title>Smit's Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Hello, I am Smit Bhoraniya, and everything about me is over here." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
        <meta name="keywords" content="smit, smit's portfolio, portfolio" />
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
