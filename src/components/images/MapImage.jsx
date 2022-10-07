import * as styles from '../../styles/image.module.css'

const MapImage = () => {
    const mapImgUrl = new URL(
        '../../images/map.png?as=avif&width=400',
        import.meta.url
    )
    return <img src={mapImgUrl} alt="" className={styles.img} />
}

export default MapImage
