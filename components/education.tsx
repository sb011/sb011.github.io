import styles from '../styles/Education.module.css'

const Education = () => {
    return (
        <div id='education' className={styles.edcontainer}>
            <h1 data-aos="zoom-in-right"  className={styles.title}>Education</h1>
            <div data-aos="zoom-in" className={styles.edu}>
                <div className={styles.card}>
                    <h1 className={styles.school}>Dharmsinh Desai University, Nadiad</h1>
                    <h1 className={styles.degree}>Bachelor of technology (B.Tech)</h1>
                    <h1 className={styles.study}>Computer Engineering</h1>
                    <h1 className={styles.dates}>2019-2023</h1>
                    <h1 className={styles.result}>8.3/10</h1>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.school}>Nirmal Vidhyalay, Morbi</h1>
                    <h1 className={styles.degree}>Higher Secondary Certificate (11th - 12th)</h1>
                    <h1 className={styles.study}>Science</h1>
                    <h1 className={styles.dates}>2017-2019</h1>
                    <h1 className={styles.result}>92%(Gujcet - 100/120)</h1>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.school}>Nirmal Vidhyalay, Morbi</h1>
                    <h1 className={styles.degree}>Secondary School Certificate (1st - 10th)</h1>
                    <h1 className={styles.dates}>2007-2017</h1>
                </div>
            </div>
        </div>
    )
}

export default Education
