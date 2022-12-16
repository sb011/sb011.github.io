import styles from '../styles/Education.module.css'

const Education = () => {
    return (
        <div id='education' className={styles.edcontainer}>
            <h1 className={styles.title}>Education</h1>
            <div className={styles.edu}>
                <div className={styles.card}>
                    <h1 className={styles.school}>Dharmsinh Desai University, Nadiad</h1>
                    <h1 className={styles.degree}>Bachelor of technology (B.Tech)</h1>
                    <h1 className={styles.study}>Computer Engineering</h1>
                    <h1 className={styles.dates}>2019-2023(Expected)</h1>
                    <h1 className={styles.result}>8.3/10</h1>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.school}>Dharmsinh Desai University, Nadiad</h1>
                    <h1 className={styles.degree}>Bachelor of technology (B.Tech)</h1>
                    <h1 className={styles.study}>Computer Engineering</h1>
                    <h1 className={styles.dates}>2019-2023(Expected)</h1>
                    <h1 className={styles.result}>8.3/10</h1>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.school}>Dharmsinh Desai University, Nadiad</h1>
                    <h1 className={styles.degree}>Bachelor of technology (B.Tech)</h1>
                    <h1 className={styles.study}>Computer Engineering</h1>
                    <h1 className={styles.dates}>2019-2023(Expected)</h1>
                    <h1 className={styles.result}>8.3/10</h1>
                </div>
            </div>
        </div>
    )
}

export default Education
