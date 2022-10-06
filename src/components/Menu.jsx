import { NavLink, useNavigate } from 'react-router-dom'
import * as styles from '../styles/menu.module.css'

const Menu = ({ openMenuHandler }) => {
    const navigate = useNavigate()
    const navlinkOnClickHandler = (e) => {
        openMenuHandler(false)
        navigate(e.currentTarget.to)
    }

    return (
        <div className={styles.menu}>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? styles.active : undefined
                        }
                        onClick={navlinkOnClickHandler}
                    >
                        Accueil
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        to="/produit"
                        className={({ isActive }) =>
                            isActive ? styles.active : undefined
                        }
                        onClick={navlinkOnClickHandler}
                    >
                        Notre Produit
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        to="/qui-sommes-nous"
                        className={({ isActive }) =>
                            isActive ? styles.active : undefined
                        }
                        onClick={navlinkOnClickHandler}
                    >
                        Qui sommes-nous?
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu
