import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import linkedin from '../public/linkedin.svg'
import github from '../public/GitHub.svg'
import leetcode from '../public/leetcode.svg'
import gfg from '../public/geeksforgeeks.svg'
import codechef from '../public/codechef.svg'
import instagram from '../public/instagram.svg'
import twitter from '../public/twitter.svg'
import snapchat from '../public/snapchat.svg'
import facebook from '../public/facebook.svg'
import Link from 'next/link'


const Footer = () => {
    return (
        <div id='personal' className={styles.container}>
            <div className={styles.info}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Email Address</h1>
                    <h1 className={styles.val}><Link className={styles.emaillink} href='mailto:smitbhoraniya11@gmail.com'>smitbhoraniya11@gmail.com</Link></h1>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Mobile no.</h1>
                    <h1 className={styles.val}>+91 95109 33403</h1>
                </div>
            </div>
            <p className={styles.resume}>Want to see my <Link className={styles.resumelink} href='https://drive.google.com/drive/folders/1_4crLqUCe9YD9mkvxfTgHSIzyp5oZcDV?usp=sharing' target='_blank'>Resume</Link>?</p>
            <div className={styles.socialcontainer}>
                <div className={styles.social}>
                    <div className={styles.iconcontainer}>
                        <Link href='https://www.linkedin.com/in/smit-bhoraniya-a071411b8/' target='_blank'>
                            <Image loading="lazy" className={styles.icons} src={linkedin} alt='linkedin' />
                        </Link>
                    </div>
                    <div className={styles.iconcontainer}>
                        <Link href='https://github.com/sb011' target='_blank'>
                            <Image loading="lazy" className={styles.icons} src={github} alt='github' />
                        </Link>
                    </div>
                    <div className={styles.iconcontainer}>
                        <Link href='https://leetcode.com/sb011/' target='_blank'>
                            <Image loading="lazy" className={styles.icons} src={leetcode} alt='leetcode' />
                        </Link>
                    </div>
                    <div className={styles.iconcontainer}>
                        <Link href='https://auth.geeksforgeeks.org/user/smitbhoraniya11/practice' target='_blank'>
                            <Image loading="lazy" className={styles.icons} src={gfg} alt='geeksforgeeks' />
                        </Link>
                    </div>
                    <div className={styles.iconcontainer}>
                        <Link href='https://www.codechef.com/users/sb_011' target='_blank'>
                            <Image loading="lazy" className={styles.icons} src={codechef} alt='codechef' />
                        </Link>
                    </div>
                    <div className={styles.iconcontainer}>
                        <Link href='https://www.instagram.com/sb._.011/' target='_blank'>
                            <Image loading="lazy" className={styles.icons} src={instagram} alt='instagram' />
                        </Link>
                    </div>
                    <div className={styles.iconcontainer}>
                        <Link href='https://twitter.com/Smitbhoraniya11' target='_blank'>
                            <Image loading="lazy" className={styles.icons} src={twitter} alt='twitter' />
                        </Link>
                    </div>
                    <div className={styles.iconcontainer}>
                        <Link href='https://www.snapchat.com/add/sb0_11?share_id=rIS0ziPwiL4&locale=en-US' target='_blank'>
                            <Image loading="lazy" className={styles.icons} src={snapchat} alt='snapchat' />
                        </Link>
                    </div>
                    <div className={styles.iconcontainer}>
                        <Link href='https://www.facebook.com/smit.bhoraniya.90?mibextid=ZbWKwL' target='_blank'>
                            <Image loading="lazy" className={styles.icons} src={facebook} alt='facebook' />
                        </Link>
                    </div>
                </div>
            </div>
            <p className={styles.slog}>Created by Smit Bhoraniya🤔🌚</p>
            <p className={styles.version}>Version 1.0.2</p>
        </div>
    )
}

export default Footer