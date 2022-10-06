import { Link } from 'react-router-dom'
import * as styles from '../styles/navbar.module.css'
import LogoIcon from 'jsx:../icons/logo.svg'
import MenuIcon from 'jsx:../icons/menu.svg'
import CloseIcon from 'jsx:../icons/close.svg'
import Menu from './Menu'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('of_screen')
        } else {
            document.body.classList.remove('of_screen')
        }
    }, [menuOpen])

    return (
        <>
            <nav className={styles.nav}>
                <Link className={styles.navbar_brand} to="/">
                    <span>
                        <LogoIcon height={40} width={40} />
                    </span>
                    Green Beacon
                </Link>
                <button
                    type="button"
                    className={styles.btn_menu}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {!menuOpen ? (
                        <MenuIcon className={styles.menu_icon} />
                    ) : (
                        <CloseIcon className={styles.menu_icon} />
                    )}
                </button>
            </nav>
            {menuOpen && <Menu />}
        </>
    )
}

export default Navbar
