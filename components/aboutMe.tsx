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
      <motion.div className={styles.mainContainer}>
        <motion.div className={styles.me}>
          <motion.div className={styles.wordContainer}>
            <motion.div variants={name} initial="init" animate="animate" className={styles.box}>
              <motion.h1 className={styles.name}>Smit</motion.h1>
            </motion.div>
            <motion.div variants={lines} initial="init" animate="animate" className={styles.line}></motion.div>
          </motion.div>
          <motion.div className={styles.wordContainer}>
            <motion.div variants={name} initial="init" animate="animate" className={styles.box}>
              <motion.h1 className={styles.name}>Bhoraniya</motion.h1>
            </motion.div>
            <motion.div variants={lines} initial="init2" animate="animate" className={styles.line}></motion.div>
          </motion.div>
        </motion.div>
        <div className={styles.titles}>
          <h5 className={styles.title}>Software Engineer</h5>
          <h5 className={styles.title}>Freelancer</h5>
          <h5 className={styles.title}>Developer</h5>
          <h5 className={styles.title}>Designer</h5>
        </div>
      </motion.div>
    )
}

export default AboutMe