import * as styles from '../../styles/image.module.css'

const DataImage = () => {
    const dataImgUrl = new URL(
        '../../images/mika-baumeister-Wpnoqo2plFA-unsplash.jpg?as=avif&width=400',
        import.meta.url
    )
    return (
        <img
            src={dataImgUrl}
            alt=""
            className={styles.img}
        />
    )
}

export default DataImage
