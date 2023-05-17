import { useState } from "react";
import styles from "../styles/header.module.scss";
import logo from '../assets/images/logo.svg';
import avatar from '../assets/images/image-avatar.png'
import Cart from "./cart";
import {BsCart3} from 'react-icons/bs';
import { CART } from "../lib/interface";
import { useOutsideClick } from "../lib/useOutsideClick";



const Header = ({cart, removeItem, cartCount, showCart, openCart, closeCart} : CART) => {

    const [navOverlayClasses, setOverlay] = useState<string[]>([styles.navOverlay])
    const [navBarClasses, setBar] = useState<string[]>([styles.navbar])

    const handleMenu = () => {
        setOverlay(prev => {
            if (prev.includes(styles.showMenu)) {
                return prev.filter(item => item !== styles.showMenu)
            }

            return [...prev, styles.showMenu]
        })

        setBar(prev => {
            if (prev.includes(styles.slide)) {
                return prev.filter(item => item !== styles.slide)
            }

            return [...prev, styles.slide]
        })
    }

    const ref = useOutsideClick(closeCart)

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <button
                    className={styles.navOpenBtn}
                    id="navOpen-btn"
                    aria-controls="navlist"
                    aria-expanded="false"
                    onClick={handleMenu}
                >
                    <span className={styles.srOnly} aria-expanded="false" role="menu">
                        Menu
                    </span>
                </button>
                <img src={logo} alt="logo" className="logo" />
                <div className={navOverlayClasses.join(' ')} id='navoverlay'>
                    <nav className={navBarClasses.join(' ')} id='navbar'>
                        <button
                            className={styles.navCloseBtn}
                            id="navClose-btn"
                            aria-controls="navlist"
                            aria-expanded="false"
                            onClick={handleMenu}
                        >
                            <span className={styles.srOnly} aria-expanded="false" role="menu">
                                closeMenu
                            </span>
                        </button>

                        <ul className={styles.navlist} id="navlist" data-visible="false">
                            <li
                                data-selected="true"
                            >
                                collections
                            </li>
                            <li
                                data-selected="false"
                            >
                                men
                            </li>
                            <li
                                data-selected="false"
                            >
                                women
                            </li>
                            <li
                                data-selected="false"
                            >
                                about
                            </li>
                            <li
                                data-selected="false"
                            >
                                contact
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div ref={ref} className={styles.imageContainer}>
                <button className={styles.cartBtn} onClick={openCart}>
                    <span className={styles.srOnly} aria-expanded="false" role="cart">
                        Cart
                    </span>
                    {cartCount ? <span className={styles.cartCount}>{cartCount}</span> : null}
                    <BsCart3 />
                </button>
                <img src={avatar} alt="avatar" />
                {showCart ? <Cart cart={cart} removeItem={removeItem}/> : null}
            </div>
        </header>
    );
};

export default Header;
