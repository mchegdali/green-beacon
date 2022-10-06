import * as styles from '../../styles/image.module.css'

const DataImage = ({ fullscreen }) => {
    const dataImgUrl = new URL(
        '../../images/mika-baumeister-Wpnoqo2plFA-unsplash.jpg?as=avif&width=400',
        import.meta.url
    )
    return (
        <img
            src={dataImgUrl}
            alt=""
            className={`${styles.img} ${fullscreen && styles.fullscreen}`}
        />
    )
}

export default DataImage
