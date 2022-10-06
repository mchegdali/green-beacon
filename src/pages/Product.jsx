import * as styles from '../styles/product.module.css'
import { Link } from 'react-router-dom'

const dataImgUrl = new URL(
    '../images/mika-baumeister-Wpnoqo2plFA-unsplash.jpg',
    import.meta.url
)

const ProductPage = () => {
    return (
        <main className={styles.main}>
            <h1>Une balise dotée d'intelligence</h1>
            <p>
                Une meilleure prise de décision grâce à des données acquises au
                plus près de la terre.
            </p>
            <article className={styles.article}>
                <section>
                    <h2>Acquisition de données</h2>
                    <img
                        src={dataImgUrl}
                        alt=""
                        className={`${styles.img} ${styles.fullscreen}`}
                    />
                    <p className={styles.p}>
                        Par le biais de multiples capteurs, Green Beacon réalise
                        une "capture" régulière de votre parcelle de manière
                        autonome.
                    </p>
                </section>
                <section>
                    <h2>Cartographie de vos parcelles</h2>
                    <p className={styles.p}>
                        Par le biais de multiples capteurs, Green Beacon réalise
                        une "capture" régulière de votre parcelle de manière
                        autonome.
                    </p>
                </section>
            </article>
        </main>
    )
}

export default ProductPage
