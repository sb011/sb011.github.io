import { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
    const state = {
        name: '',
        email: '',
        subject: '',
        msg: ''
    }

    const [info, setInfo] = useState(state)
    const { name, email, subject, msg } = info
    const [err, setErr] = useState('')

    const handleInputChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target
        setInfo({...info, [name]: value})
    }

    const onSubmit = () => {
        try {
            if(!name || !email || !msg){
                return setErr('Please fill all the fields!')
            }
            
        } catch (error: any) {
            setErr(error.message)
        }
    }

    return (
        <div id='contact' className={styles.container}>
            <h1 data-aos="fade-up" className={styles.title}>Contact me</h1>
            <div data-aos="fade-up" className={styles.form}>
                <div className={styles.info}>
                    <div className={styles.card}>
                        <label htmlFor='name' className={styles.label}>Name<span className={styles.star}>*</span></label>
                        <input className={styles.input} name='name' type='text' id='name' placeholder='Enter your name' value={name} onChange={handleInputChange} />
                    </div>
                    <div className={styles.card}>
                        <label htmlFor='email' className={styles.label}>Email Address<span className={styles.star}>*</span></label>
                        <input className={styles.input} name='email' type='email' id='email' placeholder='Enter your email address' value={email} onChange={handleInputChange} />
                    </div>
                </div>
                <div className={styles.card}>
                    <label htmlFor='subject' className={styles.label}>Subject</label>
                    <input className={styles.input} name='subject' type='text' id='subject' placeholder='Enter your subject' value={subject} onChange={handleInputChange} />
                </div>
                <div className={styles.card}>
                    <label htmlFor='msg' className={styles.label}>Message<span className={styles.star}>*</span></label>
                    <textarea className={styles.input2} name='msg' id='msg' placeholder='Enter your message' value={msg} onChange={handleInputChange} />
                </div>
                <p className={styles.err}>{err}</p>
                <button type='submit' onClick={onSubmit} className={styles.btn}>Send the message</button>
            </div>
        </div>
    )
}

export default Contact