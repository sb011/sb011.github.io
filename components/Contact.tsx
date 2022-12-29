import styles from '../styles/Contact.module.css'
import emailjs from '@emailjs/browser';

import { useRef, useState } from 'react';

const Contact = () => {
    const form = useRef<any>(null);
    const state = {
        user_name: '',
        user_email: '',
        user_subject: '',
        message: ''
    }

    const [info, setInfo] = useState(state)
    const { user_name, user_email, user_subject, message } = info
    const [err, setErr] = useState('')

    const handleInputChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target
        setInfo({...info, [name]: value})
    }

    const onSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            if(!user_name || !user_email || !message){
                return setErr('Please fill all the fields!')
            }
            await emailjs.sendForm('service_f8og2iz', 'template_4nqmtvc', form.current, '9gV4GyGGM5zXUv83j')
            setErr("Message Sent!!")
            setInfo({user_name: '', user_email: '', user_subject: '', message: ''});
        } catch (error: any) {
            setErr(error.message)
        }
    }

    return (
        <div id='contact' className={styles.container}>
            <h1 data-aos="fade-up" className={styles.title}>Contact me</h1>
            <form ref={form} data-aos="fade-up" className={styles.form}>
                <div className={styles.info}>
                    <div className={styles.card}>
                        <label htmlFor='user_name' className={styles.label}>Name<span className={styles.star}>*</span></label>
                        <input className={styles.input} name='user_name' type='text' id='user_name' placeholder='Enter your name' value={user_name} onChange={handleInputChange} />
                    </div>
                    <div className={styles.card}>
                        <label htmlFor='user_email' className={styles.label}>Email Address<span className={styles.star}>*</span></label>
                        <input className={styles.input} name='user_email' type='email' id='user_email' placeholder='Enter your email address' value={user_email} onChange={handleInputChange} />
                    </div>
                </div>
                <div className={styles.card}>
                    <label htmlFor='user_subject' className={styles.label}>Subject</label>
                    <input className={styles.input} name='user_subject' type='text' id='user_subject' placeholder='Enter your subject' value={user_subject} onChange={handleInputChange} />
                </div>
                <div className={styles.card}>
                    <label htmlFor='message' className={styles.label}>Message<span className={styles.star}>*</span></label>
                    <textarea className={styles.input2} name='message' id='message' placeholder='Enter your message' value={message} onChange={handleInputChange} />
                </div>
                <p className={styles.err}>{err}</p>
                <button type='submit' value="Send" onClick={onSubmit} className={styles.btn}>Send the message</button>
            </form>
        </div>
    )
}

export default Contact