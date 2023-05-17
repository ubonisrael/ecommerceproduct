import { CART } from '../lib/interface';
import styles from '../styles/cart.module.scss'
import CartItem from './cartItem';

const Cart = ({cart, removeItem} : CART) => {

    return(
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Cart</h3>
            <div className={styles.underline}></div>
            <div>
            {cart.length > 0 ? <>{cart.map(({name, discount, num, price}, i) => <CartItem key={i} id={i} name={name} discount={discount} num={num} price={price} del={removeItem}/>)} <button className={styles.checkOutBtn}>Checkout</button></> : <p className={styles.empty}>Your cart is empty.</p>}
            </div>
        </div>
    )
}

export default Cart