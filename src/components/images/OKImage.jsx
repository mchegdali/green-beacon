import * as styles from '../../styles/image.module.css'

const OKImage = () => {
    const okImgUrl = new URL(
        '../../images/engin-akyurt-cIdVZMnyVv4-unsplash.jpg?as=avif&width=400',
        import.meta.url
    )
    return (
        <img
            src={okImgUrl}
            alt=""
            className={styles.img}
        />
    )
}

export default OKImage
