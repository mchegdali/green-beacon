import * as styles from '../styles/product.module.css'

const dataImgUrl = new URL(
    '../images/mika-baumeister-Wpnoqo2plFA-unsplash.jpg?as=avif&width=400',
    import.meta.url
)

const mapImgUrl = new URL(
    '../images/map.png?as=avif&width=400',
    import.meta.url
)

const ProductPage = () => {
    return (
        <main className={styles.main}>
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
                    <img
                        src={dataImgUrl}
                        alt=""
                        className={`${styles.img} ${styles.fullscreen}`}
                    />
                    <p>
                        Par le biais de multiples capteurs, Green Beacon réalise
                        une "capture" régulière de votre parcelle de manière
                        autonome.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2>Cartographie de vos parcelles</h2>
                    <img
                        src={mapImgUrl}
                        alt=""
                        className={`${styles.img} ${styles.fullscreen}`}
                    />
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
