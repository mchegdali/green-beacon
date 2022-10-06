import DataImage from '../components/images/DataImage'
import MapImage from '../components/images/MapImage'
import * as styles from '../styles/product.module.css'

const ProductPage = () => {
    return (
        <main>
            <header className={styles.header}>
                <h1>Une balise dotée d'intelligence</h1>
                <p>
                    Une meilleure prise de décision grâce à des données acquises
                    au plus près de la terre.
                </p>
            </header>
            <article className={styles.article}>
                <section className={styles.section}>
                    <h2>Acquisition de données</h2>
                    <DataImage />
                    <p>
                        Par le biais de multiples capteurs, Green Beacon réalise
                        une "capture" régulière de votre parcelle de manière
                        autonome.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2>Cartographie de vos parcelles</h2>
                    <MapImage />
                    <p>
                        Grâce à ces données, vous pouvez suivre en temps réel
                        les données acquises par votre balise. Une carte vous
                        indique en un coup d'oeil l'état de la parcelle
                        surveillée.
                    </p>
                </section>
            </article>
        </main>
    )
}

export default ProductPage
