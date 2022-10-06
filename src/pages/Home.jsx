import { Link } from 'react-router-dom'
import Balise2DImage from '../components/images/Balise2DImage'
import * as styles from '../styles/home.module.css'

function HomePage() {
    return (
        <main>
            <header className={styles.header}>
                <h1>Green Beacon</h1>
                <p>La balise connectée avec la terre</p>
            </header>

            <article className={styles.article}>
                <section className={styles.section}>
                    <p>
                        La hausse exceptionnelle des prix des matières premières
                        et de l'énergie durant les dernières années nous
                        obligent toutes et tous à revoir nos façons de consommer
                        et de produire.
                    </p>
                    <p>
                        De plus, le réchauffement climatique et le renforcement
                        des normes anti-pollution dans l'agriculture s'imposent
                        à tous les agriculteurs.
                    </p>
                </section>
                <section className={styles.section}>
                    <h2>Notre solution</h2>
                    <Balise2DImage />
                    <p>
                        Pour vous aider dans votre quotidien, la balise
                        intelligente{' '}
                        <strong>
                            <Link to={'/produit'}>Green Beacon</Link>
                        </strong>{' '}
                        est la solution pour vous permettre de prendre des
                        décisions. Pour acquérir une cartographie détaillée de
                        vos terres, n'hésitez plus et commandez !
                    </p>
                    <Link to="/contact" className={styles.link_quote}>
                        Commander
                    </Link>
                </section>
            </article>
        </main>
    )
}

export default HomePage
