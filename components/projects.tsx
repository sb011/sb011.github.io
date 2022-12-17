import styles from '../styles/Projects.module.css'
import Link from 'next/link'

const Projects = () => {
    return (
        <div id='projects' className={styles.container}>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <h1 className={styles.header}>Insta Clone</h1>
                    <Link href='https://github.com/sb011/instagram-clone.git'>Source Code</Link>
                    <h2 className={styles.dates}>May 2021 - July 2021</h2>
                    <div className={styles.tech}>
                        <label className={styles.techheader}>Tech stack</label>
                        <div className={styles.list}>
                            <span>ReactJS</span>
                            <span>ReactJS</span>
                            <span>ReactJS</span>
                        </div>
                    </div>
                    <div className={styles.about}>
                        <p className={styles.points}>A user can login into an existing account or can create a new account using
    email. Authentication and authorization are managed with JWT tokens.</p>
                        <p className={styles.points}>An individual can connect with other users by liking their posts, following
    their profiles, and chatting with them.</p>
                        <p className={styles.points}>The chat feature uses the socket connection to provide real-time
    communication.</p>
                        <p className={styles.points}>A user may share media.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects