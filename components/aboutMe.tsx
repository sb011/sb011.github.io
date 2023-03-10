import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

const AboutMe = () => {
  var name = {
    init: {
      y: "100%"
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 1
      }
    }
  }

  var lines = {
    init: {
      x: "-100%"
    },
    init2: {
      x: "100%"
    },
    animate: {
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.me}>
        <div className={styles.wordContainer}>
          <motion.div variants={name} initial="init" animate="animate" className={styles.box}>
            <h1 className={styles.myname}>Smit</h1>
          </motion.div>
          <motion.div variants={lines} initial="init" animate="animate" className={styles.line}></motion.div>
        </div>
        <div className={styles.wordContainer}>
          <motion.div variants={name} initial="init" animate="animate" className={styles.box}>
            <h1 className={styles.myname}>Bhoraniya</h1>
          </motion.div>
          <motion.div variants={lines} initial="init2" animate="animate" className={styles.line}></motion.div>
        </div>
      </div>
      <div className={styles.cardContent}>

      </div>
      <div className={styles.titlesCont}>
        <h5 className={styles.titleItem}>Software Engineer</h5>
        <h5 className={styles.titleItem}>Freelancer</h5>
        <h5 className={styles.titleItem}>Developer</h5>
        <h5 className={styles.titleItem}>Designer</h5>
      </div>
    </div>
  )
}

export default AboutMe