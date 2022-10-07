import * as styles from '../styles/contact.module.css'
import { useId } from 'react'

function ContactPage() {
    const id = useId()

    const formOnSubmitHandler = (e) => {
        e.preventDefault()
        e.currentTarget.reset()
    }

    return (
        <main>
            <header className={styles.header}>
                <h1>Nous contacter</h1>
            </header>
            <form
                action="#"
                method="post"
                className={styles.form}
                onSubmit={formOnSubmitHandler}
            >
                <div className={styles.form_group}>
                    <label htmlFor={id + '-email'}>Email</label>
                    <input className={styles.input} type="email" name="email" id={id + '-email'} required/>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor={id + '-company'}>Nom de société</label>
                    <input className={styles.input} type="text" name="company" id={id + '-company'} required/>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor={id + '-content'}>Message</label>
                    <textarea  className={styles.textarea} name="content" id={id + '-content'} required/>
                </div>
                <button type="submit" className={styles.btn_submit}>
                    Envoyer
                </button>
            </form>
        </main>
    )
}

export default ContactPage
