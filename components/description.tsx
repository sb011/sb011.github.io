import styles from '../styles/Description.module.css'

const Description = () => {
    return (
        <div id='aboutme' className={styles.descontainer}>
            <h1  
                data-aos="fade-right"
                data-aos-duration="1000"
                className={styles.title}>
                About me
            </h1>
            <p 
                data-aos="fade-left"
                data-aos-duration="1000"
                className={styles.des}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am <span className={styles.high}>Smit Bhoraniya</span>, currently in my final year of <span className={styles.high}>Computer Science Engineering</span> at Dharmsinh Desai University, Nadiad. I have done my schooling from Nirmal Vidhyalaya, Morbi. Ever since my school days, I was good at problem-solving and Computer related things. I enjoy <span className={styles.high}>development and coding</span>. And so later, I decided to pursue a career of my choice in engineering. I solved <span className={styles.high}>600+ questions</span> across multiple platforms. I have been working on C++, JS, and Python and have knowledge of OOPS, OS, DBMS, and DSA. I have done several projects during my engineering in the areas of <span className={styles.high}>Web development, Machine learning</span>, etc. I have worked in react js, node js, express js, flask, MongoDB, SQL, etc. With this, I believe that I am someone who believes in the objectives of <span className={styles.high}>Learn, Grow, Contribute and Achieve.</span>
            </p>
        </div>
    )
}

export default Description