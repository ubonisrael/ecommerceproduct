import { useState } from "react";
import styles from "../styles/main.module.scss";
import ImageSlider from "./imageSlider";
import {BsCart3} from 'react-icons/bs'
import { MainProps } from "../lib/interface";

const item = {
    name: 'fall limited edition sneakers', desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.", price: 250, discount: 50, discountPrice: function () {
        return this.price * this.discount * 0.01
    }
}


const Main: React.FC<MainProps> = ({ image, arr, prev, next, imageNo, openBox, addToCart }) => {

    const [num, setNum] = useState(0)

    const increment = () => setNum(prev => prev + 1)
    const decrement = () => setNum(prev => {
        if (prev > 0) return prev - 1
        return prev
    })


    return (
        <section className={styles.container}>
            <ImageSlider image={image} arr={arr} prev={prev} next={next} imageNo={imageNo} openBox={openBox} />
            <section className={styles.productInfoContainer}>
                <article>
                    <h3>sneaker company</h3>
                    <h2>{item.name}</h2>
                    <p>
                        {item.desc}
                    </p>
                </article>
                <div className={styles.productPriceContainer}>
                    <div>
                        <p className={styles.productPrice}>{`$${item.discountPrice()}`}</p>
                        <p className={styles.productDiscount}>{`${item.discount}%`}</p>
                    </div>

                    <p className={styles.productDiscountAmount}>{`$${item.price}`}</p>
                </div>
                <div className={styles.productCartContainer}>
                    <div className={styles.productCartButtons}>
                        <button onClick={decrement}>-</button>
                        <p>{num}</p>
                        <button onClick={increment}>+</button>
                    </div>
                    <button className={styles.productAddCartBtn} onClick={() => {
                        if (num > 0) addToCart({ ...item, num })
                    }}>
                        <BsCart3 />
                        Add to cart</button>
                </div>
            </section>
        </section>
    );
};

export default Main;
