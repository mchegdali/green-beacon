import { Link } from 'react-router-dom'
import * as styles from '../styles/notfound.module.css'

const NotFoundPage = () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Oops, cette page n'existe pas</h1>
            <Link to={-1}>Retour à la page précédente</Link>
        </main>
    )
}

export default NotFoundPage
