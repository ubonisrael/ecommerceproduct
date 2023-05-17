import styles from '../styles/cart.module.scss'
import imageThumb from '../assets/images/image-product-1-thumbnail.jpg'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { CARTITEM } from '../lib/interface';
import { discountPrice } from '../lib/discountPrice';

const CartItem = ({ id, name, discount, price, num, del }: CARTITEM) => {

    return (
        <div className={styles.item}>
            <img src={imageThumb} alt="product image" />
            <div>
                <p>{name}</p>
                <p>{`$${discountPrice(discount, price)} X ${num}`} <span>{`$${discountPrice(discount, price) * num}`}</span></p>
            </div>
            <button className={styles.delete} onClick={() => {
                if (del) {
                    if (id || id === 0) del(id)
                }
            }}>
                <RiDeleteBin6Fill />
            </button>
        </div>
    )
}

export default CartItem