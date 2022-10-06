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
                        end
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
                            `${isActive && styles.active}`
                        }
                        onClick={navlinkOnClickHandler}
                    >
                        Notre Produit
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `${isActive && styles.active}`
                        }
                        onClick={navlinkOnClickHandler}
                    >
                        Nous contacter
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu
