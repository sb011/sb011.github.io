import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/loading.module.css';
import React, { useState, useEffect, useRef } from 'react';

const Loading = ({setIsLoading}: any) => {
    const [progress, setProgress] = useState<number>(0);
    const ref = useRef<any>();
    let i = 0;
    
    useEffect(() => {
        const pro = () => {
            const res = setTimeout(function() {
                if(progress == 100){
                    stop();    
                    clearInterval(res)
                    setProgress(100);
                    ref.current.style.width = "100%";
                }
                else{
                    setProgress(progress + 1)
                    ref.current.style.width = progress + '%';
                }
            }, 10);
        }
        pro();
    }, [progress])

    const barParent = {
        init: {
            y: 0, 
        },
        animate: {
            y: "100%",
            transition: {
                ease: "easeInOut",
                delay: 2.1,
                duration: 1
            }
        }
    }

    const bar = {
        animate: {
            height: "100%",
            opacity: 0,
            transition: {
                ease: "easeInOut",
                delay: 2.1,
                duration: 1
            }
        }
    }

    const digits = {
        animate: {
            opacity: 0,
            color: "rgb(255, 255, 255)",
            transition: {
                ease: "easeInOut",
                delay: 2,
                duration: 1
            }
        }
    }

    return (
        <motion.div className={styles.container} >
            <motion.h1 variants={digits} animate="animate" className={styles.digits} onAnimationComplete={() => setIsLoading(false)}>{progress}%</motion.h1>
            <motion.div ref={ref} className={styles.progess_bar} variants={bar} animate="animate" onAnimationComplete={() => setIsLoading(false)} />
        </motion.div>
    )
}

export default Loading