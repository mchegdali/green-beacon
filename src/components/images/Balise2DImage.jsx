import * as styles from '../../styles/image.module.css'

const Balise2DImage = () => {
    const balise2DImgUrl = new URL(
        '../../images/balise-2d.png?as=avif&width=400',
        import.meta.url
    )
    return (
        <img
            src={balise2DImgUrl}
            alt="Balise GreenBeacon en vue 2D"
            className={styles.img}
        />
    )
}

export default Balise2DImage
