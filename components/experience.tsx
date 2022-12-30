import styles from '../styles/Experience.module.css'
import Image from 'next/image'
import ImgSrc from '../public/Amazon_icon.svg'
import ImgSrc2 from '../public/jp-morgan-chase.svg'
import Link from 'next/link';

const Experience = () => {
    return (
        <div id='experience' className={styles.excontainer}>
            <h1 data-aos="zoom-out-right" className={styles.title}>Experience</h1>
            <div className={styles.parts}>
                <div data-aos="zoom-out-left" className={styles.card}>
                    <div className={styles.imgContainer}>
                        <Image loading="lazy" className={styles.img} src={ImgSrc} alt="amazon logo"/>
                    </div>
                    <div className={styles.info2}>
                        <div className={styles.details}>
                            <h1 className={styles.company}>Amazon</h1>
                            <h2 className={styles.title_company}>Amazon ML Summer School&apos;22 - Apprenticeship</h2>
                            <h2 className={styles.dates}>July 2022 - July 2022</h2>
                            <Link className={styles.certificate} href="https://drive.google.com/file/d/1VjyrH3OTywtqrtzI6nQw_dlTfwBHJvpj/view" target="_blank">Certificate</Link>
                        </div>
                        <div className={styles.about}>
                            <p className={styles.points}>Discovered various machine learning techniques, including supervised
        learning, unsupervised learning, and reinforcement learning.</p>
                            <p className={styles.points}>Examine several ML algorithms, such as decision trees, linear regression,
        and logistic regression.</p>
                            <p className={styles.points}>Learn the fundamentals of deep neural networks, probability graphic
        models, dimension reduction, and causal inference.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out-left" className={styles.card}>
                    <div className={styles.imgContainer}>
                        <Image loading="lazy" className={styles.img} src={ImgSrc2} alt="jpmc logo"/>
                    </div>
                    <div className={styles.info2}>
                        <div className={styles.details}>
                            <h1 className={styles.company}>JP Morgan Chase&Co.</h1>
                            <h2 className={styles.title_company}>Software Engineering Virtual Experience</h2>
                            <h2 className={styles.dates}>July 2022 - July 2022</h2>
                            <Link className={styles.certificate} href="https://drive.google.com/file/d/1aVG5rSuJZ6AqWcCH9JQFlQecG-_rjnKF/view?usp=share_link" target="_blank">Certificate</Link>
                        </div>
                        <div className={styles.about}>
                            <p className={styles.points}>Recognize the principles of successful user experience design.</p>
                            <p className={styles.points}>Possessed financial know-how that was matched with technical expertise to
effectively solve problems.</p>
                            <p className={styles.points}>Gained practical experience using the perspective tool for data visualisation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience